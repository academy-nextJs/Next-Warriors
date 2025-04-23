import React from "react";
 
 const layout = ({
   children,
 }: Readonly<{
   children: React.ReactNode;
 }>) => {
   return (
     <html lang="en">
       <body>
         {children}
       </body>
     </html>
   );
 };
 
 export default layout;