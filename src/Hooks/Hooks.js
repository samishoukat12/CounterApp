import {
   IncrementHnadler,
   DecrementHandler,
   ResetHandler,
} from "../Redux/Actions/CounterAction";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

export function FetchHooks() {



   const [CountOverflow, setOverflow] = useState()
   const [error, setError] = useState();
   const [Reset, setReset] = useState();
   const Count = useSelector((store) => store.CounterReducer.count);
   const dispatch = useDispatch();
   // console.log("Count", Count);
   const ctaIncrementHandler = () => {

      if (Count >= 10) {
         toast.error("Counter cannot be greater than 10")
         setOverflow(
            <Toaster />
         )
      }
      else {
         dispatch(IncrementHnadler(Count));
      }

      // console.log("count Chnage", Count);
   };
   const ctaDecrementHandler = () => {
      if (Count > 0) {
         dispatch(DecrementHandler(Count));
      } else {
         toast.error("Counter cannot be Negative")
         setError(
            <Toaster />
         )
      }
      // console.log("count Chnage", Count);
   };
   const ctaResetHandler = () => {
      dispatch(ResetHandler());
      toast.success('Count Reset SuccessFully!')
      setReset(
         <Toaster />
      );
   };
   return [
      Count,
      ctaIncrementHandler,
      ctaDecrementHandler,
      ctaResetHandler,
      error,
      Reset,
      CountOverflow
   ];
}
