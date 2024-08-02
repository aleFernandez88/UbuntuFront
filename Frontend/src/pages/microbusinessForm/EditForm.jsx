import React from "react";  
import FormularioMicroemprendimiento from '../../common/microbusinessForm/MicrobusinessForm';  
import { dataForm } from "../../assets/editForm.json"

export const EditForm = () => {  
  
        
        const title = dataForm[0].title;  
        const subtitle = dataForm[0].subtitle;  
        const button2 = dataForm[0].button2;
        const fieldLabels = dataForm[0].fieldLabels.reduce((acc, item) => {  
          return { ...acc, ...item };  // 
        }, {});  
        console.log("Props en CreateForm:", { title, subtitle, fieldLabels }); 
  return (  
    <FormularioMicroemprendimiento   
      title={title}   
      subtitle={subtitle}   
      button2={button2}
      fieldLabels={fieldLabels}   
    />  
  );  
};
