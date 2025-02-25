
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import "https://deno.land/x/xhr@0.1.0/mod.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { messages } = await req.json()

    // Add system message to ensure health-focused responses
    const systemMessage = {
      role: "system",
      content: "You are Dr. Ninva, a knowledgeable and empathetic healthcare assistant. You specialize in providing general health advice, scheduling appointments, and helping users understand their health metrics. You should always encourage users to seek professional medical attention for specific health concerns. Your responses should be clear, professional, and focused on promoting health and wellness."
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('OPENAI_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [systemMessage, ...messages],
        functions: [
          {
            name: "schedule_appointment",
            description: "Schedule a telehealth consultation appointment",
            parameters: {
              type: "object",
              properties: {
                appointmentType: {
                  type: "string",
                  enum: ["general", "followup", "specialist"],
                  description: "The type of appointment"
                },
                preferredDate: {
                  type: "string",
                  format: "date",
                  description: "The preferred date for the appointment"
                }
              },
              required: ["appointmentType", "preferredDate"]
            }
          },
          {
            name: "update_health_record",
            description: "Update user's health record with new information",
            parameters: {
              type: "object",
              properties: {
                recordType: {
                  type: "string",
                  enum: ["symptom", "measurement", "medication"],
                  description: "The type of health record to update"
                },
                value: {
                  type: "string",
                  description: "The value to record"
                }
              },
              required: ["recordType", "value"]
            }
          }
        ],
        function_call: "auto"
      }),
    })

    const data = await response.json()

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
