import { IoSearch } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import DatePicker from "../../components/DatePicker/DatePicker";
import TextField from "../../components/TextField/TextField";
import Card from "../../components/Card/Card";

const data = [
  {
    id: "431545",
    sum: "123 902",
    entity: "2",
    beverage: "Cola",
    food: "Гамбургер",
    time: "18:35",
  },
  {
    id: "434545",
    sum: "321 00-",
    entity: "4",
    beverage: "fuse tea",
    food: "Big Gamburger",
    time: "09:35",
  },
];
const Person = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between mb-3">
        <TextField
          className="max-w-60"
          startIcon={<IoSearch color="#0E73F6" size={"18"} />}
          placeholder="Поиск по ID"
          formInputSize="md"
        />
        <div className="flex justify-center gap-2">
          <DatePicker />
          <div className="flex justify-center items-center border rounded gap-1 px-2">
            <CiClock2 color="#6E8BB7" />
            <span>45:08</span>
          </div>
        </div>
      </div>
      {data.map((item, index) => {
        return (
          <Card
            id={item.id}
            sum={item.sum}
            entity={item.entity}
            beverage={item.beverage}
            food={item.food}
            time={item.time}
          />
        );
      })}
    </div>
  );
};

export default Person;
