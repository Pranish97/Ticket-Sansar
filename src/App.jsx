import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./layouts/Layout"
import EventsDetail from "./pages/EventsDetail"

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home />} />
    <Route path="/:id" element={<EventsDetail />} />
    </Route>
  ))

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
