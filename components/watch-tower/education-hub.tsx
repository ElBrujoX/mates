import { BookOpen, GraduationCap, Shield, Brain } from 'lucide-react'
import { Progress } from "@/components/ui/progress"

export function EducationHub() {
  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="flex items-center gap-2 mb-6">
        <BookOpen className="w-5 h-5" />
        <h2 className="text-2xl font-semibold">Education Hub</h2>
      </div>
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-medium text-sm text-muted-foreground">RECOMMENDED COURSES</h3>
          
          <div className="space-y-3">
            <div className="p-4 border rounded-md">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-blue-500 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Scam Prevention Basics</h4>
                    <span className="text-sm text-muted-foreground">40%</span>
                  </div>
                  <Progress value={40} className="mt-2" />
                </div>
              </div>
            </div>

            <div className="p-4 border rounded-md">
              <div className="flex items-start gap-3">
                <Brain className="w-5 h-5 text-purple-500 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Advanced Security</h4>
                    <span className="text-sm text-muted-foreground">0%</span>
                  </div>
                  <Progress value={0} className="mt-2" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 border rounded-md bg-blue-50 dark:bg-blue-900/10">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-blue-500" />
            <span className="font-medium">Security Level: Beginner</span>
          </div>
          <span className="text-sm text-muted-foreground">2/5 completed</span>
        </div>
      </div>
    </div>
  )
} 