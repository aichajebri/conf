import "./Post.css";

export default function Post({ img }) {
  return (
    <div className="post">
      <img className="postImg" src={img} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat"></span>
        </div>
        <span className="postTitle">
          <div to="/post/abc" className="link">
            Lorem ipsum dolor sit amet
          </div>
        </span>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti?
      </p>
    </div>
  );
}
