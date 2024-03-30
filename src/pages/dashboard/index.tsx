import { Card, CardContent } from "@components/ui/card";
import useAuth from "@hooks/useAuth";

export default function Dashboard() {
  return (
    <div className="flex h-[100vh] w-full items-center justify-center">
      <Card>
        <CardContent className="p-10">
          <h2 className="text-3xl font-bold text-primary">
            React Vite Tailwind Starter
          </h2>
          <p className="text-gray-600 mt-5 w-[450px] ">
            This is a starter template for React, Vite, and Tailwind CSS. It
            includes all best practices and tools to start a new project with
            shadcn Ui components.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
