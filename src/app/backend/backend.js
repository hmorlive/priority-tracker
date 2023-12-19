"use client";
import {
    readTextFile,
    writeTextFile,
    exists as fileExists,
  } from "@tauri-apps/api/fs";

async function getFilePath() {
    const { appDataDir, join } = await import("@tauri-apps/api/path");
    const appDirectory = await appDataDir();
    return join(appDirectory, "tasks.json");
}

export async function getTasks() {
  try {
    const filePath = await getFilePath();
    const fileExistsCheck = await fileExists(filePath);
    if (!fileExistsCheck) await writeTextFile(filePath, JSON.stringify([]));
    const tasks = await readTextFile(filePath);
    return JSON.parse(tasks || "[]");
  } catch (error) {
    console.error("Error in getTasks:", error);
    return []; // Return an empty array in case of an error
  }
}

export async function addTask(task) {
  try {
    task.id = Math.random().toString(36).substring(7);
    task.createdAt = new Date().toISOString();
    const tasks = (await getTasks()) || [];
    tasks.push(task);
    const filePath = await getFilePath();
    await writeTextFile(filePath, JSON.stringify(tasks));
    return tasks;
  } catch (error) {
    console.error("Error in addTask:", error);
    return []; // Return an empty array in case of an error
  }
}

export async function removeTask(id) {
  try {
    const tasks = (await getTasks()) || [];
    const filteredTasks = tasks.filter((task) => task.id !== id);
    const filePath = await getFilePath();
    await writeTextFile(filePath, JSON.stringify(filteredTasks));
    return filteredTasks;
  } catch (error) {
    console.error("Error in removeTask:", error);
    return []; // Return an empty array in case of an error
  }
}
