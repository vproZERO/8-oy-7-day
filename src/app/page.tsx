"use client";
import { decrement, increment } from "@/redux/reducer/count";

import {useAppDispatch, useAppSelector} from '../redux/hooks'



export default function Home() {

  const count = useAppSelector((state) => state.count.count)

  const dispatch = useAppDispatch()

  const add = () => {
    dispatch(increment)
    
  }

  const sub = () => {
    console.log("sub");
    dispatch(decrement)
  }

  return (
    <div>
      <button onClick={add}>add</button>
      <h3>{}</h3>
      <button onClick={sub}>sub</button>
    </div>
  );
}
