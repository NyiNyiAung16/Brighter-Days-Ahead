import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Feeling from "../components/Feeling";
import CommentForm from "../components/CommentForm";
import CommentLists from "../components/CommentLists";
import { getFeeling } from "../helpers/feelings";
import Spinner from "../components/Spinner";
import { CommentProvider } from "../contexts/commentContext";
import { setTitle } from "../helpers/setTitle";

export default function FeelingDetail() {
  const [feeling, setFeeling] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();

  useEffect(() => {
    setTitle('Feeling Details');
    const fetch = async () => {
      setIsLoading(true);
      let feelingData = await getFeeling(params.id);
      setFeeling(feelingData);
      setIsLoading(false);
    };
    fetch();
  },[params]);


  return (
    <div className="min-h-screen">
      <Header />
      <div className="max-w-xl mx-auto px-5 sm:px-0 mt-10">
        {isLoading && <Spinner className="block mx-auto" />}
        {!isLoading && <Feeling feeling={feeling}/>}
        <CommentProvider>
          <div className="mt-10">
            <CommentForm feelingId={params.id}/>
            <CommentLists/>
          </div>
        </CommentProvider>
      </div>
    </div>
  );
}
