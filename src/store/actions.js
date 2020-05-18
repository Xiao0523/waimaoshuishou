export default{
  saveNewsList(context,newsList){
    context.commit('saveNewsList', newsList);
  },
  saveNewsId(context,pid){
    context.commit('savePid', pid);
  },
}