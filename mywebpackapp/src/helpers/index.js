const agentCampaigns = userId => `/agents/${userId}/view_report?link_id=campaigns`;

const agentWallet = userId => `/agents/${userId}/payment?action_id=dash_payments&link_id=wallet`;

const agentAccounts = (userId) => `/agents/${userId}/payment?action_id=dash_payments&link_id=balance_summary`;

const agentCommissionInvoices = () => '/documents';

const agentStatistics = (userId) => `/agents/${userId}/view_report`;

const agentCalendar = () => '/agents/calendar';

const agentTtsnSearch = () => '/agent_ttsn_dashboard_elements/inventory_search';

const agentTtsnShortlisted = () => '/agent_ttsn_dashboard_elements/shortlisted_inventory';

const agentTtsnAttachedWithQuote = () => '/agent_ttsn_dashboard_elements/book_inventory';

const agentTtsnBookingStatus = () => '/agent_ttsn_dashboard_elements/booking_status';

const checkValidation = (num1, num2) => {
    console.log(num1, num2)
    if(num1 && num2) return true;
    return false;
}

export {
    agentCampaigns,
    agentWallet,
    agentAccounts,
    agentCommissionInvoices,
    agentStatistics,
    agentCalendar,
    agentTtsnSearch,
    agentTtsnShortlisted,
    agentTtsnAttachedWithQuote,
    agentTtsnBookingStatus,
    checkValidation
};