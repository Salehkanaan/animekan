
import { Chart } from "react-google-charts";
import { useParams } from "react-router-dom";
import useFetch from "../../usefetch";


const Charts = () => {
  const { id } = useParams();//used to extract the id parameter from the URL.
  const { data: anime,error,isPending } = useFetch("http://localhost:8000/animes/" + id);
  
  const data1 = [["Rating","votes"]];
   if (anime && anime.votes) {
    for (const [voteNb, vote] of Object.entries(anime.votes)) {
      data1.push([voteNb, Number(vote)]); 
    }
  }
  const data2 = [["Rating","votes"]];
  if (anime && anime.analytics) {
   for (const [voteNb, vote] of Object.entries(anime.analytics)) {
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
