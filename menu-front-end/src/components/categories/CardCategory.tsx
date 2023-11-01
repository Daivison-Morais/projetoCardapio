import { NextPage } from "next";

type Categories = {
  id: string;
  name: string;
  image: string;
  menusId: string[];
};

const GetCardCategory: NextPage<Categories> = ({
  id,
  name,
  image,
  menusId,
}) => {

  
  return (
    <>
      <div className="relative cursor-pointer">
        <div className="w-full h-24 bg-white rounded-2xl overflow-hidden shadow-md">
          <img
            src={image}
            alt="Carregando"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <div className="font-bold text-2xl text-white">{name}</div>
        </div>
      </div>
    </>
  );
};

export default GetCardCategory;

/* export const getServerSideProps: GetServerSideProps = async (context) =>{
  type Categories = {
    id: string,
    name: string,
    image: string,
    menusId: string[]
  }
  const data: null | Categories = null;
    await axios.get(`${BASE_URL}/categories`)
          .then((response) => {
           console.log(response.data);      
          })
          .catch((error) => {
            console.log(error);
            alert("malformed request");
          });
  
    
  return {
    props: {
      name: data
    }
  }

} */
