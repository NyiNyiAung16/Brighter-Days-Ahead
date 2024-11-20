import DefaultLayout from "../layouts/default";
import RelaxationLists from "../components/RelaxationLists";
import Spinner from "../components/Spinner";
import useRelaxation from "../helpers/useRelaxation";
import { setTitle } from "../helpers/setTitle";

export default function Relaxation() {
  const relaxationContext = useRelaxation();
  setTitle('Relaxation Corner');

  return (
    <DefaultLayout>
        {relaxationContext?.isLoading && <Spinner className="block mx-auto"/>}
        {!relaxationContext?.isLoading && <RelaxationLists relaxations={relaxationContext?.relaxations}/>}
    </DefaultLayout>
  );
}
