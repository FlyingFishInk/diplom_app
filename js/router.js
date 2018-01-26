var Dashboard = {
    template:
    '<div class="app">
        <section class="welcome-page"></section>
        <section class="dashboard">
            <div class="container xs-padding">
                <div class="dashboard-container">
                    <h2 class="header">Dashboard</h2>
                    <div class="row">
                        <div class="col-md-3 col-sm-4 col-md-offset-1 text-center">
                            <div class="img-container">
                                <img src="img/dashboard/Face.jpg" alt="avatar" class="img-circle avatar">
                            </div>
                            <p class="name text-center" id="userName">{{name}}</p>
                            <a href="#" class="btn add-task">add task</a>
                            <a href="#" class="btn edit-prof">edit profile</a>
                            <a href="#" class="btn exit">exit</a>
                        </div>
                        <div class="col-md-7 col-sm-8 all-tasks-container">
                        <a href="#" class="btn all-tasks">
                            <img src="img/dashboard/arrow-left.png" alt="arrow icon" class="arrow-left">
                                All tasks
                            <img src="img/dashboard/arrow-right.png" alt="arrow icon" class="arrow-right">
                        </a>
                        <div class="tasks-list">
                            <div class="task-item text-center col-xs">
                                <div class="row">
                                    <div class="col-sm-1 col-xs-2 task-item-icon">
                                        <a href="#">
                                            <img src="img/dashboard/time-blue.png" alt="" class="text-center">
                                        </a>
                                    </div>
                                    <div class="col-sm-8 col-xs-8 task-input-container">
                                        <input type="text" class="task-name" placeholder="Title of the task">
                                    </div>
                                    <!--Hidden xs start-->
                                    <div class="col-sm-1  hidden-xs task-item-icon">
                                        <a href="#" class="close-btn">
                                            <img src="img/dashboard/close.png" alt="">
                                        </a>
                                    </div>
                                    <div class="col-sm-1 hidden-xs task-item-icon">
                                        <a href="#">
                                            <img src="img/dashboard/arr-icon.png" alt="">
                                        </a>
                                    </div>
                                    <div class="col-sm-1 hidden-xs task-item-icon">
                                        <a href="#">
                                            <img src="img/dashboard/check-blue.png" alt="">
                                        </a>
                                    </div>
                                    <!--Hidden xs end-->
                                    <!--Visible xs start-->
                                    <div class="col-xs-2 visible-xs ">
                                        <a href="#" class="close-btn">
                                            <img src="img/dashboard/close.png" alt="">
                                        </a>
                                        <a href="#" class="arr-icon">
                                            <img src="img/dashboard/arr-icon.png" alt="">
                                        </a>
                                        <a href="#">
                                            <img src="img/dashboard/check-blue.png" alt="">
                                        </a>
                                    </div>
                                    <!--Visible xs end-->
                                </div>
                            </div>
                            <!--End of Task item-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <section class="profile"></section>
        <section class="add-task"></section>
        <section class="edit-task"></section>
    </div>'



}
var routes = [
    {path: '/welcome-page', component: WelcomePage},
    {path: '/', component: Dashboard},
    {path: '/profile', component: Profile},
    {path: '/add-task', component: AddTask},
    {path: '/edit-task', component: EditTask}
]

var router = new VueRouter({
    routes: routes
})