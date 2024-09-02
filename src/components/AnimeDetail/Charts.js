
import { Chart } from "react-google-charts";
import { useParams } from "react-router-dom";
import useFetch from "../../usefetch";
import useFetch1 from "../../useFetch1";


const Charts = () => {
  const { id } = useParams();//used to extract the id parameter from the URL.
  const { data: animes, error, isPending } = useFetch1("http://localhost:3001/api/anime");

  //const [SelectedAnime,setSelectedAnime]=useState(null);
  const anime = [];

  if (animes) {
    anime.push(animes.info.animes.find((anime) => parseInt(anime.id) === parseInt(id)));
  }

  const data1 = [["Rating","votes"]];
   if (animes && anime[0].votes) {
    for (const [voteNb, vote] of Object.entries(anime[0].votes)) {
      data1.push([voteNb, Number(vote)]); 
    }
  }
  const data2 = [["Rating","votes"]];
  if (animes && anime[0].analytics) {
   for (const [voteNb, vote] of Object.entries(anime[0].analytics)) {
     data2.push([voteNb, Number(vote)]); 
   }
 }
  const options = {
    chart: {
      title: "Votes",
    },
  };

  return (
    <>
    <div className="charts">
     {isPending && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {anime && (
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={data1}
        options={options}
      />)}
      <Chart
        chartType="PieChart"
        data={data2}
        width={"100%"}
        height={"400px"}
      />
      </div>
    </>
  );
}

export default Charts;
