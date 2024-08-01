export const getExplore = async () => {
   try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/4G1G`);
    const exploreDaa = res.json(); 
    return exploreDaa;
   } catch (err) {
    console.log(err)
   }
} 

export const getLive = async () => {
   try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/VHHT`);
    const liveData = res.json(); 
    return liveData;
   } catch (err) {
    console.log(err)
   }
} 

export const getSearchResult = async () => {
   try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS`);
    const searchData = res.json(); 
    return searchData;
   } catch (err) {
    console.log(err)
   }
} 