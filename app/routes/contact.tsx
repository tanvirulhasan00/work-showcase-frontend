import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Show Case | Contact" },
    { name: "description", content: "Welcome to Cookie Software Ltd." },
  ];
}

const ContactCom = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center mt-20">
      <Card className="w-[350px] sm:w-[450px] max-sm:m-auto">
        <CardHeader>
          <CardTitle>Interested?</CardTitle>
          <CardDescription>
            Send us your information. We will reach you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="example@mail.com" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input id="phoneNumber" placeholder="01XXXXXXXXX" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button className="w-full cursor-pointer bg-indigo-600 hover:bg-indigo-700">
            Send
          </Button>
        </CardFooter>
      </Card>
      <Card className="border-none shadow-none w-[350px] sm:w-[450px] max-sm:m-auto">
        <CardHeader>
          <CardTitle>Offce Address</CardTitle>
          <CardDescription>Visit our office.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex space-y-1.5">
              <Label htmlFor="name">Cookie Software Ltd.</Label>
            </div>
            <div className="flex  space-y-1.5">
              <Label htmlFor="email">cookiessoftwareltd@gmail.com</Label>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phoneNumber">01900112233</Label>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div>
            <h1>Address</h1>
            <p className="text-gray-400">
              Road 1, House 28, Pollibiddut DOSH, Ashulia, Savar, Dhaka
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
export default ContactCom;
