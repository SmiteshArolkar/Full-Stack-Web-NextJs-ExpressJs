import { useRouter } from 'next/router'

function BlogItem(props) {
  //routing
  const router = useRouter();
  const { title, image, desc , slug} = props;

  const onNavigate = () => {
    router.push(`/blog/${slug}`)
  }

  
  return (
    <>
      <div className="max-w-sm mx-auto my-5 overflow-hidden rounded hover:shadow-xl shadow-md">
        <img className="w-full h-60" src={image} alt={title}></img>
        <div className="px-6 py-4 ">
          <div className="mb-2 text-xl font-bold">
            <p className="text-base text-gray-700">{desc}</p>
          </div>
          <div className="text-center">
            <button onClick={onNavigate} className="px-4 py-2 font-semibold text-blue-700 bg-transparent rounded hover:border-transparent hover:text-white hover:bg-blue-500 border border-blue">
              Read More....
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogItem;
