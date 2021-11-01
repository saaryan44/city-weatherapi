
const x=require('express'); const y=x(); 

y.use(x.json());
const port=process.env.PORT || 4000;

y.use(x.static('build'));




y.listen(port ,()=>console.log(`port ${port}`));