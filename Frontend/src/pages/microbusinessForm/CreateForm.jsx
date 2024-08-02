import React from "react";  
import FormularioMicroemprendimiento from '../../common/microbusinessForm/MicrobusinessForm';  
import { dataForm } from "../../assets/createForm.json"

export const CreateForm = () => {  
  
        
        const title = dataForm[0].title;  
        const subtitle = dataForm[0].subtitle;  
        const fieldLabels = dataForm[0].fieldLabels.reduce((acc, item) => {  
          return { ...acc, ...item };  // 
        }, {});  
        console.log("Props en CreateForm:", { title, subtitle, fieldLabels }); 
  return (  
    <FormularioMicroemprendimiento   
      title={title}   
      subtitle={subtitle}   
      fieldLabels={fieldLabels}   
    />  
  );  
};
/*import React from "react";
import FormularioMicroemprendimiento from '../../common/microbusinessForm/MicrobusinessForm';



export const CreateForm = () => {

    return(
        <FormularioMicroemprendimiento />
    )
}*/