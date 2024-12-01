import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export function InitialSetup() {
  const [step, setStep] = useState(1)

  const handleNextStep = () => {
    setStep(step + 1)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Initial Setup</CardTitle>
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Skill Assessment</h3>
            <div>
              <label className="text-sm font-medium">Trading Experience</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium">Technical Analysis Proficiency</label>
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>
            <div>
              <label className="text-sm font-medium">Fundamental Analysis Proficiency</label>
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>
            <Button onClick={handleNextStep}>Next</Button>
          </div>
        )}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Goal Setting</h3>
            <div>
              <label className="text-sm font-medium">Primary Learning Goal</label>
              <Input placeholder="e.g., Master technical analysis" />
            </div>
            <div>
              <label className="text-sm font-medium">Target Achievement</label>
              <Input placeholder="e.g., Consistent 10% monthly returns" />
            </div>
            <div>
              <label className="text-sm font-medium">Learning Style Preference</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your preferred learning style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="visual">Visual</SelectItem>
                  <SelectItem value="auditory">Auditory</SelectItem>
                  <SelectItem value="reading">Reading/Writing</SelectItem>
                  <SelectItem value="kinesthetic">Kinesthetic</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleNextStep}>Next</Button>
          </div>
        )}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Path Selection</h3>
            <div>
              <label className="text-sm font-medium">Choose Your Learning Path</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your learning path" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technical">Technical Analysis Mastery</SelectItem>
                  <SelectItem value="fundamental">Fundamental Analysis Deep Dive</SelectItem>
                  <SelectItem value="risk">Risk Management Specialist</SelectItem>
                  <SelectItem value="algo">Algorithmic Trading</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium">Additional Notes</label>
              <Textarea placeholder="Any specific areas you'd like to focus on?" />
            </div>
            <Button>Complete Setup</Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

