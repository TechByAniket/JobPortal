import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export const Features = () => {



  return (
    <>
      <Tabs defaultValue="SmartMatch" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="SmartMatch">Smart Match</TabsTrigger>
          <TabsTrigger value="ResumeBuilder">Resume Builder</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </>
  );
};
