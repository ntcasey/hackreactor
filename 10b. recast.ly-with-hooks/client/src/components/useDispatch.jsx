import { useState, useEffect } from "react";

export default function useDispatch(input, time) {
  const [dispatch, setDispatch] = useState();

  useEffect(() => {
    let timeId = setTimeout(() => {
      setDispatch(input);
    }, time);

    return () => {
      if (timeId) clearTimeout(timeId);
    };
  }, [input]);

  return dispatch;
}
