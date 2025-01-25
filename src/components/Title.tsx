interface TitleProps {  title: string; 

}


const Title = ({ title }:TitleProps )=> {
  return (
    <h1 className="uppercase font-bold text-center text-3xl  mb-2">
        {title}
    </h1>
   )
}
export default Title;