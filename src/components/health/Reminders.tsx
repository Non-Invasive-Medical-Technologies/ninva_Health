
import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Bell } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface Reminder {
  id: string;
  title: string;
  description: string | null;
  due_date: string;
  completed: boolean;
  reminder_type: string;
}

export const Reminders = () => {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    const fetchReminders = async () => {
      const { data, error } = await supabase
        .from('reminders')
        .select('*')
        .order('due_date', { ascending: true })
        .limit(5);

      if (error) {
        toast.error('Failed to load reminders');
        return;
      }

      setReminders(data || []);
    };

    fetchReminders();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Bell className="w-5 h-5 text-ninva mr-2" />
          Upcoming Reminders
        </CardTitle>
      </CardHeader>
      <CardContent>
        {reminders.length === 0 ? (
          <p className="text-gray-500 text-sm">No upcoming reminders</p>
        ) : (
          <div className="space-y-4">
            {reminders.map((reminder) => (
              <div
                key={reminder.id}
                className={`p-3 rounded-lg border ${
                  reminder.completed ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                <h4 className="font-medium text-sm">
                  {reminder.title}
                </h4>
                {reminder.description && (
                  <p className="text-sm text-gray-500 mt-1">
                    {reminder.description}
                  </p>
                )}
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-gray-500">
                    {new Date(reminder.due_date).toLocaleDateString()}
                  </span>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                    {reminder.reminder_type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
