import Feeling from './Feeling'

export default function PreviewMessages({ feelings }) {

  return (
    <div className="p-10">
        <h1 className="title">Short Quotes</h1>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {feelings.map((feeling) => (
            <div key={feeling.id} className="h-max bg-white rounded-lg p-2 shadow-lg">
              <Feeling feeling={feeling}/>
            </div>
          ))}
        </div>
    </div>
  );
}
