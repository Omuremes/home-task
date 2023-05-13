import React from "react";
import "./style/news.css";
const news = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices, eros a molestie volutpat, eros ipsum egestas mauris, nec semper lacus elit vitae mauris. Quisque consectetur nisi ut metus eleifend egestas.",
    image: "https://picsum.photos/seed/1/400/300",
  },
  {
    id: 2,
    title: "Nulla facilisi",
    content:
      "Nulla facilisi. Nulla vel ligula urna. Sed vitae velit vel ex bibendum blandit. Suspendisse dictum, libero eget scelerisque faucibus, arcu nulla tempus massa, vel lobortis odio sapien vitae metus.",
    image: "https://picsum.photos/seed/2/400/300",
  },
  {
    id: 3,
    title: "Suspendisse dictum",
    content:
      "Suspendisse dictum, libero eget scelerisque faucibus, arcu nulla tempus massa, vel lobortis odio sapien vitae metus. In ac diam eu dolor dapibus tincidunt quis eget turpis. Aliquam blandit, elit ut pretium vestibulum, libero quam pretium sapien, in rutrum nibh odio vel nibh.",
    image: "https://picsum.photos/seed/3/400/300",
  },
];

function NewsPage() {
  return (
    <div className="news-container">
      {news.map((item) => (
        <div key={item.id} className="news-item">
          <img className="news-image" src={item.image} alt={item.title} />
          <h2 className="news-title">{item.title}</h2>
          <p className="news-content">{item.content}</p>
        </div>
      ))}
    </div>
  );
}

export default NewsPage;
