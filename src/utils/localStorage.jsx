
localStorage.clear();

const employees = [
  {
    id: 1,
    name: "John",
    email: "john.doe@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Login Page",
        taskDescription: "Create a login page with email and password validation",
        taskDate: "2025-08-15",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Setup",
        taskDescription: "Set up MongoDB database for user authentication",
        taskDate: "2025-08-10",
        category: "Backend"
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 2,
    name: "Jane",
    email: "jane.smith@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "API Development",
        taskDescription: "Develop REST API for the employee management system",
        taskDate: "2025-08-16",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "UI Wireframing",
        taskDescription: "Design wireframes for the dashboard layout",
        taskDate: "2025-08-12",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Payment Integration",
        taskDescription: "Integrate payment gateway into the system",
        taskDate: "2025-08-13",
        category: "Backend"
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 3,
    name: "Alex",
    email: "alex.johnson@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Frontend Styling",
        taskDescription: "Apply responsive CSS to improve UI design",
        taskDate: "2025-08-14",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fixes",
        taskDescription: "Fix bugs found during testing phase",
        taskDate: "2025-08-11",
        category: "Testing"
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 4,
    name: "Emily",
    email: "emily.wilson@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "SEO Optimization",
        taskDescription: "Optimize the website for search engine ranking",
        taskDate: "2025-08-18",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Newsletter Setup",
        taskDescription: "Create and schedule monthly newsletters",
        taskDate: "2025-08-09",
        category: "Marketing"
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 5,
    name: "Michael",
    email: "michael.brown@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Cloud Deployment",
        taskDescription: "Deploy application on AWS cloud environment",
        taskDate: "2025-08-20",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "CI/CD Pipeline",
        taskDescription: "Set up GitHub Actions for automatic deployment",
        taskDate: "2025-08-14",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Server Migration",
        taskDescription: "Migrate from old server to new infrastructure",
        taskDate: "2025-08-13",
        category: "DevOps"
      },
      {
        
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Newsletter Setup",
        taskDescription: "Create and schedule monthly newsletters",
        taskDate: "2025-08-09",
        category: "Marketing"
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  }
];

const admin = [{
    id: 1,
    email: "admin@example.com",
    password: "123"
}];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    //const data = localStorage.getItem('employees') //it will stringyfy the employees
    //console.log(JSON.parse(data)); // parse basically reverse of stringyfy

    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees, admin};
}
