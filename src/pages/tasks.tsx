import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";
const Tasks = () => {
  const { data, isError, isLoading } = useGetTasksQuery(undefined);
  if (isLoading) {
    return <p>Loading....</p>;
  }
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-end items-center gap-5">
        <h1 className="mr-auto">Task </h1>
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="low">Low</TabsTrigger>
            <TabsTrigger value="medium">Medium</TabsTrigger>
            <TabsTrigger value="high">High</TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-5">
        {!isLoading &&
          data.tasks.map((task) => <TaskCard task={task} key={task.id} />)}
      </div>
    </div>
  );
};

export default Tasks;
