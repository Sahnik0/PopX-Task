
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

const SignupForm = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isAgency, setIsAgency] = useState("yes");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Account created successfully!",
        description: "Welcome to PopX platform.",
      });
      
      // Reset form
      setFullName("");
      setPhoneNumber("");
      setEmail("");
      setPassword("");
      setCompanyName("");
      setIsAgency("yes");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Create your<br />
          PopX account
        </h1>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-purple-600 font-medium">
            Full Name<span className="text-red-500">*</span>
          </Label>
          <Input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Marry Doe"
            className="border-gray-200 focus:border-purple-500 focus:ring-purple-500"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phoneNumber" className="text-purple-600 font-medium">
            Phone number<span className="text-red-500">*</span>
          </Label>
          <Input
            id="phoneNumber"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Marry Doe"
            className="border-gray-200 focus:border-purple-500 focus:ring-purple-500"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-purple-600 font-medium">
            Email address<span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Marry Doe"
            className="border-gray-200 focus:border-purple-500 focus:ring-purple-500"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-purple-600 font-medium">
            Password<span className="text-red-500">*</span>
          </Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Marry Doe"
            className="border-gray-200 focus:border-purple-500 focus:ring-purple-500"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="companyName" className="text-purple-600 font-medium">
            Company name
          </Label>
          <Input
            id="companyName"
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Marry Doe"
            className="border-gray-200 focus:border-purple-500 focus:ring-purple-500"
          />
        </div>

        <div className="space-y-3">
          <Label className="text-purple-600 font-medium">
            Are you an Agency?<span className="text-red-500">*</span>
          </Label>
          <RadioGroup 
            value={isAgency} 
            onValueChange={setIsAgency}
            className="flex space-x-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="yes" 
                id="yes" 
                className="border-purple-600 text-purple-600"
              />
              <Label htmlFor="yes" className="text-gray-700">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="no" 
                id="no"
                className="border-gray-400 text-gray-400"
              />
              <Label htmlFor="no" className="text-gray-700">No</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="pt-6">
          <Button 
            type="submit" 
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium"
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
