import Article from "../../components/article";
import { articleList } from "../../constants/text";
import "./styles.css";

const Articles = () => {
  return (
    <div id="article">
      {articleList.map((article) => (
        <Article
          key={article.id}
          id={article.id}
          title={article.title}
          paragraphs={article.paragraphs}
        />
      ))}
    </div>
  );
};

export default Articles;
