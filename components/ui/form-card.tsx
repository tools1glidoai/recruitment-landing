import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function FormCard() {
  return (
    <div className="bg-slate-900 rounded-xl p-6 shadow-2xl w-full max-w-md relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900/90 z-0"></div>

      <div className="relative z-10">
        <h3 className="text-2xl font-playfair font-semibold text-white mb-6 text-center">
          Hire Smarter, Not Harder – Get Started Now!
        </h3>

        <div className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-white">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Full Name"
              className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400"
            />
          </div>

          <div>
            <Label htmlFor="company" className="text-white">
              Company Name
            </Label>
            <Input
              id="company"
              placeholder="Your Company"
              className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-white">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@company.com"
              className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400"
            />
          </div>

          <div className="grid grid-cols-4 gap-2">
            <div>
              <Label htmlFor="countryCode" className="text-white sr-only">
                Country Code
              </Label>
              <Select defaultValue="+91">
                <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white">
                  <SelectValue placeholder="+91" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+91">+91</SelectItem>
                  <SelectItem value="+1">+1</SelectItem>
                  <SelectItem value="+44">+44</SelectItem>
                  <SelectItem value="+61">+61</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="col-span-3">
              <Label htmlFor="phone" className="text-white sr-only">
                Phone Number
              </Label>
              <Input
                id="phone"
                placeholder="Phone Number"
                className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400"
              />
            </div>
          </div>

          <Button className="w-full bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500 text-white font-semibold py-6 text-lg">
            GET STARTED
          </Button>
        </div>
      </div>
    </div>
  )
}

