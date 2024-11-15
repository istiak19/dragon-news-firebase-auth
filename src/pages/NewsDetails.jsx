import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";
import { FaArrowLeftLong } from "react-icons/fa6";

const NewsDetails = () => {
    const { data } = useLoaderData()
    const news = (data[0])
    return (
        <div>
            <header>
                <Header></Header>
                <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
                    <section className="col-span-9">
                        <h2>Dragon News</h2>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src={news.image_url}
                                    alt="Shoes"
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{news.title}</h2>
                                <p>{news.details}</p>
                                <div className="card-actions">
                                    <Link to='/category/01' className="btn btn-neutral"><FaArrowLeftLong /> All news in this category</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <aside className="col-span-3">
                        <RightNav></RightNav>
                    </aside>
                </main>
            </header>
        </div>
    );
};

export default NewsDetails;