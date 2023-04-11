const MachineRoutes = require('./machine-route');
const ProcessCodeRoutes = require('./process-code-route');
const DrumRoutes = require('./drum-route');
const SemiWipCodeRoutes = require('./semi-wip-code-route');
const ProcessTypeRoutes = require('./process-type-route');
const MasterSICSRoutes = require('./master-sics-route');
const RoleRoutes = require('./role-route');
const DepartmentRoutes = require('./department-route');
const SectionRoutes = require('./section-route');
const EmployeeRoutes = require('./employee-route');
const UserRoutes = require('./user-route');
const AuthRoutes = require('./auth-route')
const WorkingOrderRoutes = require('./working-order-route')
const GroupingResultRoutes = require('./grouping-result-route')
const ProgressOrderRoutes = require('./progress-order-route')


module.exports = [
    MachineRoutes,
    ProcessCodeRoutes,
    DrumRoutes,
    SemiWipCodeRoutes,
    MasterSICSRoutes,
    ProcessTypeRoutes,
    RoleRoutes,
    DepartmentRoutes,
    SectionRoutes,
    EmployeeRoutes,
    UserRoutes,
    AuthRoutes,
    WorkingOrderRoutes,
    GroupingResultRoutes,
    ProgressOrderRoutes,
]