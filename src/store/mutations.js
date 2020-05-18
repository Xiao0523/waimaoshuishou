export default{
  saveNewsList(state, newsList) {
    state.newsList = newsList;
  },
  saveNewsId(state, pid) {
    state.id = pid;
  }
}