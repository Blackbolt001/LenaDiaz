import "./bookslist.scss";

export default function BooksList({ id,title,active,setSelected}) {
  return(
    <li className={ active ? "bookList active" : "bookList"}
    onClick={() => setSelected(id)}
    >
      {title}
    </li>
);   
}
