module.exports = {
  apps: [
    {
      name: "react-app",
      script: "serve",
      args: "-s build",
      instances: "max",
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 8002, // Adjust the port as needed
      },
    },
  ],
};
