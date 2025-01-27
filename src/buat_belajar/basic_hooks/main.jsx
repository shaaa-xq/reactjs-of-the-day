import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TodoApp from "./UseState";
import InputName from "./UseState2";
import Counter from "./UseState2";
import ShowDetail from "./UseState2";
import Form from "./UseState2";
import ToDo from "./UseState2";
import CatFacts from "./UseEffect";
import CounterApp from "./UseEffect";
import CleanBackground from "./UseEffect";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <TodoApp /> */}
    <InputName />
    {/* <Counter /> */}
    {/* <ShowDetail /> */}
    {/* <Form /> */}
    {/* <ToDo /> */}
    {/* <CatFacts /> */}
    {/* <CounterApp /> */}
    {/* <CleanBackground /> */}
  </StrictMode>
)
