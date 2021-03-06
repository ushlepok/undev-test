App.Video = Em.Object.extend({
  id: null,
  title: null,
  description: null,
  avatarUrl: null,
  likes: null,
  isLike: null,
  url: function(){
    return "http://player.vimeo.com/video/" + this.get('id') + "?api=1;title=0;byline=0;portrait=0;";
  }.property('id'),
  likeOrNot: function(){
    if( this.get('isLike') == 0 ){
      return 'Поставить лайк';
    }
    if( this.get('isLike') == 1 ){
      return 'Убрать лайк'
    }
  }.property('isLike')
});