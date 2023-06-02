import "./books.scss"
import { useEffect, useState } from "react";
import BooksList from "../bookslist/BooksList";
import { featuredBooks,coldBooks,justiceBooks,mightyBooks,exitBooks,gamesBooks,marshlandBooks,swatBooks,morganBooks }
 from "../../data";

export default function Books() {
  const [selected,setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id:"all",
      title:"All"
    },
    {
      id:"featured",
      title:"Featured",
    },
    {
      id:"cold",
      title:"Tennessee Cold Case",
    },
    {
      id:"justice",
      title:"The Justice Seekers",
    },
    {
      id:"mighty",
      title:"The Mighty McKenzies",
    },
    {
      id:"exit",
      title:"Exit Inc Series",
    },
    {
      id:"games",
      title:"Deadly Games Series",
    },
    {
      id:"marshland",
      title:"Marshland Justice Series",
    },
    {
      id:"swat",
      title:"Tennessee SWAT Series",
    },
    {
      id:"morgan",
      title:"Morgan Brothers Series",
    },
  ];

useEffect(() =>{
  switch (selected) {
    case "all":
      setData(mightyBooks);
      break;
    case "featured":
      setData(featuredBooks);
      break;
      case "cold":
        setData(coldBooks);
        break;
        case "justice":
          setData(justiceBooks);
          break;
          case "mighty":
            setData(mightyBooks);
            break;
            case "exit":
              setData(exitBooks);
              break;
              case "games":
                setData(gamesBooks);
                break;
                case "marshland":
                  setData(marshlandBooks);
                  break;
                case "swat":
                  setData(swatBooks);
                  break;
                  case "morgan":
                    setData(morganBooks);
                    break;
                    default:
                      setData(featuredBooks);
  }
}, [selected]);

  return (
    <div className="books" id="books" >
        <h1>Book Series</h1>
        <ul>
          {list.map(item=>(
            <BooksList title={item.title}
             active={selected === item.id}
             setSelected={setSelected}
             id={item.id}
             />
          ))}
        </ul>
        <div className="container">
          {data.map((d) =>(
            <div className="item">
              <img src={d.img} alt=""
              />
              <h3>{d.title}</h3>
            </div>
          ))}
        </div>
        
    </div>
  );
}
