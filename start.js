#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 EcoLearn Backend Quick Start');
console.log('===============================\n');

// Check if we're in the backend directory
if (!fs.existsSync('package.json')) {
  console.log('❌ Please run this script from the backend directory');
  process.exit(1);
}

// Check if .env exists
if (!fs.existsSync('.env')) {
  console.log('📝 Creating .env file...');
  if (fs.existsSync('env.example')) {
    fs.copyFileSync('env.example', '.env');
    console.log('✅ .env file created from template');
  } else {
    console.log('❌ env.example not found');
    process.exit(1);
  }
}

// Check if node_modules exists
if (!fs.existsSync('node_modules')) {
  console.log('📦 Installing dependencies...');
  try {
    execSync('npm install', { stdio: 'inherit' });
    console.log('✅ Dependencies installed');
  } catch (error) {
    console.log('❌ Failed to install dependencies');
    process.exit(1);
  }
}

// Check if MongoDB is running
console.log('🗄️  Checking MongoDB...');
try {
  execSync('mongosh --eval "db.runCommand({ping: 1})" --quiet', { stdio: 'pipe' });
  console.log('✅ MongoDB is running');
} catch (error) {
  console.log('⚠️  MongoDB not detected. Starting with Docker...');
  try {
    execSync('docker run -d -p 27017:27017 --name ecolearn-mongo mongo:latest', { stdio: 'pipe' });
    console.log('✅ MongoDB started with Docker');
    // Wait a moment for MongoDB to start
    setTimeout(() => {
      startServer();
    }, 3000);
    return;
  } catch (dockerError) {
    console.log('❌ Could not start MongoDB. Please start MongoDB manually.');
    console.log('   Options:');
    console.log('   1. Install MongoDB locally');
    console.log('   2. Use Docker: docker run -d -p 27017:27017 --name ecolearn-mongo mongo:latest');
    console.log('   3. Use MongoDB Atlas (cloud)');
    process.exit(1);
  }
}

startServer();

function startServer() {
  console.log('\n🌱 Starting EcoLearn Backend Server...');
  console.log('=====================================\n');
  
  // Start the development server
  const server = spawn('npm', ['run', 'dev'], {
    stdio: 'inherit',
    shell: true
  });

  server.on('error', (error) => {
    console.log('❌ Failed to start server:', error.message);
  });

  server.on('close', (code) => {
    console.log(`\n🔌 Server stopped with code ${code}`);
  });

  // Handle graceful shutdown
  process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down server...');
    server.kill('SIGINT');
    process.exit(0);
  });
}
