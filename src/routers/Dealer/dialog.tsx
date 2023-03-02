import { useState } from "react";
import { addDealer } from "../../lib/api";
import { Input, InputBlock } from "../../component/Input";

export function AddDealerDialog(close: any) {
  const [имя, setИмя] = useState<string>("");
  const [фамилия, setФамилия] = useState<string>("");
  const [отчество, setОтчество] = useState<string>("");
  const [фотография, setФотография] = useState<string>("");
  const [адрес, setАдрес] = useState<string>("");
  const [телефон, setТелефон] = useState<string>("");

  function query() {
    addDealer({
      имя,
      фамилия,
      отчество,
      фотография,
      адрес,
      телефон,
    }).then(e=>{
      if(e) alert("Успешно!")
      if(e) window.location.reload()
    })
  }

  return {
    title:"Добавить дилера",
    content: [
      InputBlock([
        Input("Фамилия", (p: string, d: any) => {
          setФамилия(d);
        }),
        Input("Имя", (p: string, d: any) => {
          setИмя(d);
        }),
      ]),
      InputBlock([
        Input("Отчество", (p: string, d: any) => {
          setОтчество(d);
        }),
        Input("Фотография (url)", (p: string, d: any) => {
          setФотография(d);
        }),
      ]),
      InputBlock([
        Input("Адрес", (p: string, d: any) => {
          setАдрес(d);
        }),
        Input("Телефон", (p: string, d: any) => {
          setТелефон(d);
        }),
      ]),
    ],
    query,
  }
}