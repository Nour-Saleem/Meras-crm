document.addEventListener('DOMContentLoaded', function() {
    const projectToggle = document.getElementById('projectToggle');
    const projectList = document.getElementById('project_list');
    const PmoToggle=document.getElementById('PmoToggle');
    const pmo_list=document.getElementById('pmo_list');
    const Property_list=document.getElementById('Property_list');
    const PropertyToggle=document.getElementById('PropertyToggle');
    const CustomerToggle=document.getElementById('CustomerToggle');
    const customer_list=document.getElementById('customer_list');
    const development_list=document.getElementById('development_list');
    const developmentToggle=document.getElementById('developmentToggle');
    const markitingToggle=document.getElementById('markitingToggle');
    const markiting_list=document.getElementById('markiting_list');
    const Purchases_list=document.getElementById('Purchases_list');
    const pourchaseToggle=document.getElementById('pourchaseToggle');
    const reportToggle=document.getElementById('reportToggle');
    const report_list=document.getElementById('report_list');
    const BookingToggle=document.getElementById('BookingToggle');
    const BookingList=document.getElementById('BookingList');
    const ContractsList=document.getElementById('ContractsList');
    const ContractsToggle=document.getElementById('ContractsToggle');
    const DeliveryList=document.getElementById('DeliveryList');
    const DeliveryToggle=document.getElementById('DeliveryToggle');
    const MaintenanceList=document.getElementById('MaintenanceList');
    const MaintenanceToggle=document.getElementById('MaintenanceToggle');
    const projects_toggle=document.getElementById('projects_toggle');
    const projects=document.getElementById('projects');

    projectToggle.addEventListener('click', function(event) {
        event.stopPropagation();
     if (projectList.style.display === 'flex') {
            projectList.style.display = 'none';
             // Hide if currently visible
            
        } else {
            projectList.style.display = 'flex';
             pmo_list.style.display = 'none';
             Property_list.style.display = 'none';
             customer_list.style.display = 'none';
             development_list.style.display = 'none';
             markiting_list.style.display = 'none';
             Purchases_list.style.display = 'none';
             report_list.style.display = 'none';
             BookingList.style.display = 'none';
             ContractsList.style.display = 'none';
             DeliveryList.style.display = 'none';
             MaintenanceList.style.display = 'none'; // Show if currently hidden
        }

        
    });
    projects_toggle.addEventListener('click',function(event){
        event.stopPropagation();
        if(projects.style.display === 'flex'){
            projects.style.display= "none";
        }
        else{
            projects.style.display= "flex";
        }
    });
      

    PmoToggle.addEventListener('click',function(event){
        event.stopPropagation();
         if (pmo_list.style.display === 'flex') {
            pmo_list.style.display = 'none'; // Hide if currently visible
        } else {
            pmo_list.style.display = 'flex';
            // Show if currently hidden
            projectList.style.display = 'none';
             
             Property_list.style.display = 'none';
             customer_list.style.display = 'none';
             development_list.style.display = 'none';
             markiting_list.style.display = 'none';
             Purchases_list.style.display = 'none';
             report_list.style.display = 'none';
             BookingList.style.display = 'none';
             ContractsList.style.display = 'none';
             DeliveryList.style.display = 'none';
             MaintenanceList.style.display = 'none';

        }

    });


    PropertyToggle.addEventListener('click',function(event){
        event.stopPropagation();
         if (Property_list.style.display === 'flex') {
            Property_list.style.display = 'none'; // Hide if currently visible
        } else {
            Property_list.style.display = 'flex';
            projectList.style.display = 'none';
             pmo_list.style.display = 'none';
             
             customer_list.style.display = 'none';
             development_list.style.display = 'none';
             markiting_list.style.display = 'none';
             Purchases_list.style.display = 'none';
             report_list.style.display = 'none';
             BookingList.style.display = 'none';
             ContractsList.style.display = 'none';
             DeliveryList.style.display = 'none';
             MaintenanceList.style.display = 'none'; // Show if currently hidden
        }
    });
     
    CustomerToggle.addEventListener('click',function(event){
        event.stopPropagation();
         if (customer_list.style.display === 'flex') {
            customer_list.style.display = 'none'; // Hide if currently visible
        } else {
            customer_list.style.display = 'flex';
             // Show if currently hidden
             projectList.style.display = 'none';
             pmo_list.style.display = 'none';
             Property_list.style.display = 'none';
             development_list.style.display = 'none';
             markiting_list.style.display = 'none';
             Purchases_list.style.display = 'none';
             report_list.style.display = 'none';
             BookingList.style.display = 'none';
             ContractsList.style.display = 'none';
             DeliveryList.style.display = 'none';
             MaintenanceList.style.display = 'none';
        }
    });

    developmentToggle.addEventListener('click',function(event){
        event.stopPropagation();
         if (development_list.style.display === 'flex') {
            development_list.style.display = 'none'; // Hide if currently visible
        } else {
            development_list.style.display = 'flex';
             // Show if currently hidden
            projectList.style.display = 'none';
             pmo_list.style.display = 'none';
             Property_list.style.display = 'none';
             customer_list.style.display = 'none';
             markiting_list.style.display = 'none';
             Purchases_list.style.display = 'none';
             report_list.style.display = 'none';
             BookingList.style.display = 'none';
             ContractsList.style.display = 'none';
             DeliveryList.style.display = 'none';
             MaintenanceList.style.display = 'none';
        }
    });

    markitingToggle.addEventListener('click',function(event){
        event.stopPropagation();
         if (markiting_list.style.display === 'flex') {
            markiting_list.style.display = 'none'; // Hide if currently visible
        } else {
            markiting_list.style.display = 'flex'; // Show if currently hidden
            projectList.style.display = 'none';
             pmo_list.style.display = 'none';
             Property_list.style.display = 'none';
             customer_list.style.display = 'none';
             development_list.style.display = 'none';
             Purchases_list.style.display = 'none';
             report_list.style.display = 'none';
             BookingList.style.display = 'none';
             ContractsList.style.display = 'none';
             DeliveryList.style.display = 'none';
             MaintenanceList.style.display = 'none';
        }
    });

    pourchaseToggle.addEventListener('click',function(event){
        event.stopPropagation();
         if (Purchases_list.style.display === 'flex') {
            Purchases_list.style.display = 'none'; // Hide if currently visible
        } else {
            Purchases_list.style.display = 'flex'; // Show if currently hidden
            projectList.style.display = 'none';
             pmo_list.style.display = 'none';
             Property_list.style.display = 'none';
             customer_list.style.display = 'none';
             development_list.style.display = 'none';
             markiting_list.style.display = 'none';
             report_list.style.display = 'none';
             BookingList.style.display = 'none';
             ContractsList.style.display = 'none';
             DeliveryList.style.display = 'none';
             MaintenanceList.style.display = 'none';
        }
    });

    reportToggle.addEventListener('click',function(event){
        event.stopPropagation();
         if (report_list.style.display === 'flex') {
            report_list.style.display = 'none'; // Hide if currently visible
        } else {
            report_list.style.display = 'flex'; // Show if currently hidden
            projectList.style.display = 'none';
             pmo_list.style.display = 'none';
             Property_list.style.display = 'none';
             customer_list.style.display = 'none';
             development_list.style.display = 'none';
             markiting_list.style.display = 'none';
             Purchases_list.style.display = 'none';
             BookingList.style.display = 'none';
             ContractsList.style.display = 'none';
             DeliveryList.style.display = 'none';
             MaintenanceList.style.display = 'none';
        }
    });

    BookingToggle.addEventListener('click',function(event){
        event.stopPropagation();
         if (BookingList.style.display === 'flex') {
            BookingList.style.display = 'none'; // Hide if currently visible
        } else {
            BookingList.style.display = 'flex'; // Show if currently hidden
            projectList.style.display = 'none';
             pmo_list.style.display = 'none';
             Property_list.style.display = 'none';
             customer_list.style.display = 'none';
             development_list.style.display = 'none';
             markiting_list.style.display = 'none';
             Purchases_list.style.display = 'none';
             report_list.style.display = 'none';;
             ContractsList.style.display = 'none';
             DeliveryList.style.display = 'none';
             MaintenanceList.style.display = 'none';
        }
    });
    ContractsToggle.addEventListener('click',function(event){
        event.stopPropagation();
         if (ContractsList.style.display === 'flex') {
            ContractsList.style.display = 'none'; // Hide if currently visible
        } else {
            ContractsList.style.display = 'flex'; // Show if currently hidden
            projectList.style.display = 'none';
             pmo_list.style.display = 'none';
             Property_list.style.display = 'none';
             customer_list.style.display = 'none';
             development_list.style.display = 'none';
             markiting_list.style.display = 'none';
             Purchases_list.style.display = 'none';
             report_list.style.display = 'none';
             BookingList.style.display = 'none';
             DeliveryList.style.display = 'none';
             MaintenanceList.style.display = 'none';
        }
    });
    DeliveryToggle.addEventListener('click',function(event){
        event.stopPropagation();
         if (DeliveryList.style.display === 'flex') {
            DeliveryList.style.display = 'none'; // Hide if currently visible
        } else {
            DeliveryList.style.display = 'flex'; // Show if currently hidden
            projectList.style.display = 'none';
             pmo_list.style.display = 'none';
             Property_list.style.display = 'none';
             customer_list.style.display = 'none';
             development_list.style.display = 'none';
             markiting_list.style.display = 'none';
             Purchases_list.style.display = 'none';
             report_list.style.display = 'none';
             BookingList.style.display = 'none';
             ContractsList.style.display = 'none';
             MaintenanceList.style.display = 'none';
        }
    });
    MaintenanceToggle.addEventListener('click',function(event){
        event.stopPropagation();
         if (MaintenanceList.style.display === 'flex') {
            MaintenanceList.style.display = 'none'; // Hide if currently visible
        } else {
            MaintenanceList.style.display = 'flex'; // Show if currently hidden
            projectList.style.display = 'none';
             pmo_list.style.display = 'none';
             Property_list.style.display = 'none';
             customer_list.style.display = 'none';
             development_list.style.display = 'none';
             markiting_list.style.display = 'none';
             Purchases_list.style.display = 'none';
             report_list.style.display = 'none';
             BookingList.style.display = 'none';
             ContractsList.style.display = 'none';
             DeliveryList.style.display = 'none';
             
        }
    });

     document.addEventListener('click', function () {
            projectList.style.display = 'none';
            pmo_list.style.display='none';
            Property_list.style.display='none';
            MaintenanceList.style.display='none';
            DeliveryList.style.display='none';
            ContractsList.style.display='none';
            BookingList.style.display='none';
            report_list.style.display='none';
            Purchases_list.style.display='none';
            markiting_list.style.display='none';
            development_list.style.display='none';
            customer_list.style.display='none';
            projects.style.display='none';
        
    });
});

    