/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #btnBack */
    $(document).on("click", "#btnBack", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  #btnBack */
    $(document).on("click", "#btnBack", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  #btnBack */
    $(document).on("click", "#btnBack", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  Materi */
    
    
        /* button  Quiz */
    
    
        /* button  .uib_w_6 */
    $(document).on("click", ".uib_w_6", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  Materi */
    
    
        /* button  Quiz */
    
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
