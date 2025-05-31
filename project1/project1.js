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

    projectToggle.addEventListener('click', function() {
     if (projectList.style.display === 'flex') {
            projectList.style.display = 'none'; // Hide if currently visible
        } else {
            projectList.style.display = 'flex'; // Show if currently hidden
        }
        
    });

    PmoToggle.addEventListener('click',function(){
         if (pmo_list.style.display === 'flex') {
            pmo_list.style.display = 'none'; // Hide if currently visible
        } else {
            pmo_list.style.display = 'flex'; // Show if currently hidden
        }
    });


    PropertyToggle.addEventListener('click',function(){
         if (Property_list.style.display === 'flex') {
            Property_list.style.display = 'none'; // Hide if currently visible
        } else {
            Property_list.style.display = 'flex'; // Show if currently hidden
        }
    });
     
    CustomerToggle.addEventListener('click',function(){
         if (customer_list.style.display === 'flex') {
            customer_list.style.display = 'none'; // Hide if currently visible
        } else {
            customer_list.style.display = 'flex'; // Show if currently hidden
        }
    });

    developmentToggle.addEventListener('click',function(){
         if (development_list.style.display === 'flex') {
            development_list.style.display = 'none'; // Hide if currently visible
        } else {
            development_list.style.display = 'flex'; // Show if currently hidden
        }
    });

    markitingToggle.addEventListener('click',function(){
         if (markiting_list.style.display === 'flex') {
            markiting_list.style.display = 'none'; // Hide if currently visible
        } else {
            markiting_list.style.display = 'flex'; // Show if currently hidden
        }
    });

    pourchaseToggle.addEventListener('click',function(){
         if (Purchases_list.style.display === 'flex') {
            Purchases_list.style.display = 'none'; // Hide if currently visible
        } else {
            Purchases_list.style.display = 'flex'; // Show if currently hidden
        }
    });

    reportToggle.addEventListener('click',function(){
         if (report_list.style.display === 'flex') {
            report_list.style.display = 'none'; // Hide if currently visible
        } else {
            report_list.style.display = 'flex'; // Show if currently hidden
        }
    });

    BookingToggle.addEventListener('click',function(){
         if (BookingList.style.display === 'flex') {
            BookingList.style.display = 'none'; // Hide if currently visible
        } else {
            BookingList.style.display = 'flex'; // Show if currently hidden
        }
    });
    ContractsToggle.addEventListener('click',function(){
         if (ContractsList.style.display === 'flex') {
            ContractsList.style.display = 'none'; // Hide if currently visible
        } else {
            ContractsList.style.display = 'flex'; // Show if currently hidden
        }
    });
    DeliveryToggle.addEventListener('click',function(){
         if (DeliveryList.style.display === 'flex') {
            DeliveryList.style.display = 'none'; // Hide if currently visible
        } else {
            DeliveryList.style.display = 'flex'; // Show if currently hidden
        }
    });
    MaintenanceToggle.addEventListener('click',function(){
         if (MaintenanceList.style.display === 'flex') {
            MaintenanceList.style.display = 'none'; // Hide if currently visible
        } else {
            MaintenanceList.style.display = 'flex'; // Show if currently hidden
        }
    });
});

    