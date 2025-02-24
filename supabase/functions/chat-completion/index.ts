
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

    const systemMessage = {
      role: "system",
      content: `You are an AI medical assistant focused on providing general healthcare information, appointment scheduling assistance, and health record management support. 

Key guidelines:
- Provide general health information and wellness advice
- Help schedule medical appointments
- Assist with health record organization
- Never make definitive medical diagnoses
- Always encourage consulting healthcare professionals for specific medical concerns
- Maintain a professional, empathetic tone
- Respect medical privacy and confidentiality
- Use clear, simple language
- Provide source references when relevant

If users describe urgent medical symptoms, always direct them to seek immediate medical attention.`
    };

    console.log("Processing chat request with messages:", messages);

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [systemMessage, ...messages],
        temperature: 0.7,
        functions: [
          {
            name: "schedule_appointment",
            description: "Schedule a medical appointment",
            parameters: {
              type: "object",
              properties: {
                appointmentType: {
                  type: "string",
                  enum: ["checkup", "consultation", "followup", "specialist"],
                  description: "Type of appointment needed"
                },
                preferredDate: {
                  type: "string",
                  description: "Preferred date for the appointment (YYYY-MM-DD)"
                },
                preferredTime: {
                  type: "string",
                  description: "Preferred time of day (morning, afternoon, evening)"
                },
                specialtyNeeded: {
                  type: "string",
                  description: "Medical specialty if applicable"
                }
              },
              required: ["appointmentType"]
            }
          },
          {
            name: "update_health_record",
            description: "Update patient health records with new information",
            parameters: {
              type: "object",
              properties: {
                recordType: {
                  type: "string",
                  enum: ["medication", "symptom", "measurement", "allergy", "procedure"],
                  description: "Type of health record to update"
                },
                value: {
                  type: "string",
                  description: "The information to record"
                },
                date: {
                  type: "string",
                  description: "Date of the record (YYYY-MM-DD)"
                }
              },
              required: ["recordType", "value"]
            }
          }
        ],
        function_call: "auto"
      }),
    });

    const data = await response.json();
    console.log("OpenAI response:", data);

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in chat-completion function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
