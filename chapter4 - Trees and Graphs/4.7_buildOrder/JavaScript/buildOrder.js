const graph = {};

function dfs(project, path, visited) {
  if (!graph[project]) {
    path.unshift(project);
    return path;
  }

  graph[project].forEach(dependency => {
    if (!visited[dependency]) {
      visited[dependency] = true;
      dfs(dependency, path, visited);
    }
  });

  path.unshift(project);
  return path;
};

function buildOrder(projects, dependencies) {
  const projectsFound = {};
  let result = [];

  dependencies.forEach((group) => {
    const node1 = group[0];
    const node2 = group[1];

    if (graph[node1]) {
      graph[node1].push(node2);
    } else {
      graph[node1] = [node2];
    }

    projectsFound[node1] = true;
    projectsFound[node2] = true
  });

  result = projects.filter(project => {
    return !projectsFound[project] 
  });

  for (let x = 0; x < projects.length; x++) {
    const project = projects[x];

    const dfsResult = dfs(project, [], { project: true });

    if (result.length + dfsResult.length === projects.length) {
      return result.concat(dfsResult);
    }
  }

  return false;
};

module.exports = buildOrder;