// Tests for the SoundCloud player service and controller in m2scapi-v.js
describe('SoundCloud audio player service tests', function() {
  var playerService,

      // actual soundcloud track data we'll use in our mocked tests - 2 tracks per artist
      // don't really need super accurate data but hey
      track10kMartyrs = {"kind":"track","id":200877890,"created_at":"2015/04/15 04:20:16 +0000",
                         "user_id":92678249,"duration":719922,"commentable":true,"state":"finished",
                         "original_content_size":190457906,"last_modified":"2015 /07/05 14:56:12 +0000",
                         "sharing":"public","tag_list":"Solo Original \"Solo Piano\"",
                         "permalink":"ten-thousand-martyrs","streamable":true,"embeddable_by":"all",
                         "downloadable":false,"purchase_url":null,"label_id":null,"purchase_title":null,
                         "genre":"Piano","title":"Ten Thousand Martyrs",
                         "description":"Solo in-studio performance of this original composition April 14, 2015. An unexpected version with a strange dark life to it. There may be another performance of this posted one day, but for now, the kernel of the story is there.",
                         "label_name":null,"release":null,"track_type":null,"key_signature":null,"isrc":null,
                         "video_url":null,"bpm":null,"release_year":null,"release_month":null,"release_day":null,
                         "original_format":"wav","license":"all-rights-reserved","uri":"https://api.soundcloud.com/tracks/200877890",
                         "user":{"id":92678249,"kind":"user","permalink":"deepgraysea","username":"deep gray sea",
                         "last_modified":"2015/07/01 15:35:55 +0000","uri":"https://api.soundcloud.com/users/92678249",
                         "permalink_url":"http://soundcloud.com/deepgraysea","avatar_url":"https://i1.sndcdn.com/avatars-000143585692-8k08mf-large.jpg"},
                         "permalink_url":"http://soundcloud.com/deepgraysea/ten-thousand-martyrs",
                         "artwork_url":"https://i1.sndcdn.com/artworks-000113441915-keyes1-large.jpg",
                         "waveform_url":"https://w1.sndcdn.com/sU0KtK0SVapv_m.png",
                         "stream_url":"https://api.soundcloud.com/tracks/200877890/stream",
                         "playback_count":23,"download_count":1,"favoritings_count":0,
                         "comment_count":0,"attachments_uri":"https://api.soundcloud.com/tracks/200877890/attachments",
                         "policy":"ALLOW","monetization_model":"NOT_APPLICABLE"},
            trackMoan = {"kind":"track","id":193109089,"created_at":"2015/02/26 05:39:08 +0000","user_id":92678249,
                         "duration":587730,"commentable":true,"state":"finished","original_content_size":155479340,
                         "last_modified":"2015/04/28 20:58:14 +0000","sharing":"public","tag_list":"Jazz Piano Electronic Seattle",
                         "permalink":"moan","streamable":true,"embeddable_by":"all","downloadable":false,"purchase_url":null,
                         "label_id":null,"purchase_title":null,"genre":"Chill","title":"Moan",
                         "description":"Jazz piano trio, harmonious electronics, engines of stuttering grace. A wide and gentle land.",
                         "label_name":null,"release":null,"track_type":null,"key_signature":null,"isrc":null,"video_url":null,
                         "bpm":null,"release_year":null,"release_month":null,"release_day":null,"original_format":"wav",
                         "license":"all-rights-reserved","uri":"https://api.soundcloud.com/tracks/193109089",
                         "user":{"id":92678249,"kind":"user","permalink":"deepgraysea","username":"deep gray sea",
                         "last_modified":"2015/07/01 15:35:55 +0000","uri":"https://api.soundcloud.com/users/92678249",
                         "permalink_url":"http://soundcloud.com/deepgraysea","avatar_url":"https://i1.sndcdn.com/avatars-000143585692-8k08mf-large.jpg"},
                         "permalink_url":"http://soundcloud.com/deepgraysea/moan","artwork_url":"https://i1.sndcdn.com/artworks-000108145807-1ipa6b-large.jpg",
                         "waveform_url":"https://w1.sndcdn.com/BWjIv7zDcvam_m.png","stream_url":"https://api.soundcloud.com/tracks/193109089/stream",
                         "playback_count":87,"download_count":3,"favoritings_count":3,"comment_count":0,
                         "attachments_uri":"https://api.soundcloud.com/tracks/193109089/attachments","policy":"ALLOW",
                         "monetization_model":"NOT_APPLICABLE"},
      trackOldCountry = {"kind":"track","id":187708536,"created_at":"2015/01/24 23:18:34 +0000","user_id":92678249,
                         "duration":602126,"commentable":true,"state":"finished","original_content_size":159289244,
                         "last_modified":"2015/07/05 14:56:39 +0000","sharing":"public","tag_list":"Solo Original\"Solo Piano\"",
                         "permalink":"the-old-country","streamable":true,"embeddable_by":"all","downloadable":false,
                         "purchase_url":null,"label_id":null,"purchase_title":null,"genre":"Piano","title":"The Old Country",
                         "description":"Studio solo recording January 24, 2015. I created this piece some years ago in memory of a respected friend. It has not previously been recorded.",
                         "label_name":null,"release":null,"track_type":null,"key_signature":null,"isrc":null,"video_url":null,
                         "bpm":null,"release_year":null,"release_month":null,"release_day":null,"original_format":"wav",
                         "license":"all-rights-reserved","uri":"https://api.soundcloud.com/tracks/187708536",
                         "user":{"id":92678249,"kind":"user","permalink":"deepgraysea","username":"deep gray sea",
                         "last_modified":"2015/07/01 15:35:55 +0000","uri":"https://api.soundcloud.com/users/92678249",
                         "permalink_url":"http://soundcloud.com/deepgraysea",
                         "avatar_url":"https://i1.sndcdn.com/avatars-000143585692-8k08mf-large.jpg"},
                         "permalink_url":"http://soundcloud.com/deepgraysea/the-old-country",
                         "artwork_url":"https://i1.sndcdn.com/artworks-000104474621-cmtkqa-large.jpg",
                         "waveform_url":"https://w1.sndcdn.com/vqUiJIXb0jdI_m.png",
                         "stream_url":"https://api.soundcloud.com/tracks/187708536/stream","playback_count":55,
                         "download_count":8,"favoritings_count":3,"comment_count":0,
                         "attachments_uri":"https://api.soundcloud.com/tracks/187708536/attachments","policy":"ALLOW",
                         "monetization_model":"NOT_APPLICABLE"},
            trackHurt = {"kind":"track","id":181276209,"created_at":"2014/12/13 03:02:24 +0000","user_id":92678249,
                         "duration":338108,"commentable":true,"state":"finished","original_content_size":89434844,
                         "last_modified":"2015/04/28 20:58:55 +0000","sharing":"public","tag_list":"\"Indie Rock\" \"Jazz Trio\"",
                         "permalink":"hurt","streamable":true,"embeddable_by":"all","downloadable":false,"purchase_url":null,
                         "label_id":null,"purchase_title":null,"genre":"Instrumental","title":"Hurt",
                         "description":"Originally a piano improvisation, adopted and extended by the band. There seems to be a jazz piano trio at the core of this.",
                         "label_name":null,"release":null,"track_type":null,"key_signature":null,"isrc":null,"video_url":null,
                         "bpm":null,"release_year":null,"release_month":null,"release_day":null,"original_format":"wav",
                         "license":"all-rights-reserved","uri":"https://api.soundcloud.com/tracks/181276209",
                         "user":{"id":92678249,"kind":"user","permalink":"deepgraysea","username":"deep gray sea",
                         "last_modified":"2015/07/01 15:35:55 +0000","uri":"https://api.soundcloud.com/users/92678249",
                         "permalink_url":"http://soundcloud.com/deepgraysea",
                         "avatar_url":"https://i1.sndcdn.com/avatars-000143585692-8k08mf-large.jpg"},
                         "permalink_url":"http://soundcloud.com/deepgraysea/hurt",
                         "artwork_url":"https://i1.sndcdn.com/artworks-000100077884-s4mqvg-large.jpg",
                         "waveform_url":"https://w1.sndcdn.com/LWywlfRiHR6l_m.png",
                         "stream_url":"https://api.soundcloud.com/tracks/181276209/stream",
                         "playback_count":13,"download_count":2,"favoritings_count":1,"comment_count":0,
                         "attachments_uri":"https://api.soundcloud.com/tracks/181276209/attachments","policy":"ALLOW",
                         "monetization_model":"NOT_APPLICABLE"},
         trackMystery = {"kind":"track","id":210537191,"created_at":"2015/06/16 04:50:59 +0000","user_id":107336341,
                         "duration":514869,"commentable":true,"state":"finished","original_content_size":136201304,
                         "last_modified":"2015/06/16 04:51:01 +0000","sharing":"public","tag_list":"Oud Piano Seattle Earthling Abduction Alien",
                         "permalink":"mystery","streamable":true,"embeddable_by":"all","downloadable":false,"purchase_url":null,
                         "label_id":null,"purchase_title":null,"genre":"Electronic","title":"Mystery",
                         "description":"Our Earthling taught us this one and played oud and piano. uNarg wanted to add more space battles but his time gland is inflamed and he's not at his best. Be at peace.",
                         "label_name":null,"release":null,"track_type":null,"key_signature":null,"isrc":null,"video_url":null,
                         "bpm":null,"release_year":null,"release_month":null,"release_day":null,"original_format":"wav",
                         "license":"all-rights-reserved","uri":"https://api.soundcloud.com/tracks/210537191",
                         "user":{"id":107336341,"kind":"user","permalink":"drugpilots","username":"drug pilots",
                         "last_modified":"2015/05/07 03:42:58 +0000","uri":"https://api.soundcloud.com/users/107336341",
                         "permalink_url":"http://soundcloud.com/drugpilots",
                         "avatar_url":"https://i1.sndcdn.com/avatars-000124025770-o5qvm3-large.jpg"},
                         "permalink_url":"http://soundcloud.com/drugpilots/mystery",
                         "artwork_url":"https://i1.sndcdn.com/artworks-000120379657-4a12it-large.jpg",
                         "waveform_url":"https://w1.sndcdn.com/SkeeDRhFOnTQ_m.png",
                         "stream_url":"https://api.soundcloud.com/tracks/210537191/stream","playback_count":15,"download_count":0,
                         "favoritings_count":1,"comment_count":0,"attachments_uri":"https://api.soundcloud.com/tracks/210537191/attachments",
                         "policy":"ALLOW","monetization_model":"NOT_APPLICABLE"},
        trackPerpWalk = {"kind":"track","id":203663223,"created_at":"2015/05/03 02:19:30 +0000","user_id":107336341,
                         "duration":692831,"commentable":true,"state":"finished","original_content_size":183288434,
                         "last_modified":"2015/05/03 02:19:32 +0000","sharing":"public","tag_list":"Electronic Space Groove \"Asteroid \" Strut",
                         "permalink":"perp-walk","streamable":true,"embeddable_by":"all","downloadable":false,"purchase_url":null,
                         "label_id":null,"purchase_title":null,"genre":"Funk","title":"Perp Walk",
                         "description":"SEE PERP WALK. \nWALK PERP WALK.\nBAD PERP. \nBAD BAD BAD.\nHANG YOUR SORRY PERP HEAD.",
                         "label_name":null,"release":null,"track_type":null,"key_signature":null,"isrc":null,"video_url":null,
                         "bpm":null,"release_year":null,"release_month":null,"release_day":null,"original_format":"wav",
                         "license":"all-rights-reserved","uri":"https://api.soundcloud.com/tracks/203663223",
                         "user":{"id":107336341,"kind":"user","permalink":"drugpilots","username":"drug pilots",
                         "last_modified":"2015/05/07 03:42:58 +0000","uri":"https://api.soundcloud.com/users/107336341",
                         "permalink_url":"http://soundcloud.com/drugpilots",
                         "avatar_url":"https://i1.sndcdn.com/avatars-000124025770-o5qvm3-large.jpg"},
                         "permalink_url":"http://soundcloud.com/drugpilots/perp-walk",
                         "artwork_url":"https://i1.sndcdn.com/artworks-000115437335-b31o0b-large.jpg",
                         "waveform_url":"https://w1.sndcdn.com/EGIM6xe88MW0_m.png",
                         "stream_url":"https://api.soundcloud.com/tracks/203663223/stream",
                         "playback_count":25,"download_count":0,"favoritings_count":1,"comment_count":0,
                         "attachments_uri":"https://api.soundcloud.com/tracks/203663223/attachments","policy":"ALLOW",
                         "monetization_model":"NOT_APPLICABLE"},
      fakeAllDeepGraySeaTracks = [trackMoan, trackHurt, track10kMartyrs, trackOldCountry],
      fakeDeepGraySeaTracks = [trackMoan, trackHurt],
      fakeDrugPilotsTracks = [trackMystery, trackPerpWalk],
      fakeSoloPianoTracks = [track10kMartyrs, trackOldCountry];

  beforeEach(module('m2App'));

  beforeEach(inject(function( _PlayerService_, $httpBackend) {
    playerService = _PlayerService_;

    // get deep gray sea tracks, return our four fakes above
    $httpBackend.expect('GET', 'http://api.soundcloud.com/tracks?user_id=deepgraysea&client_id=d9b33cd16dce9e1246585008747cca58&format=json&_status_code_map')
        .respond(200, fakeAllDeepGraySeaTracks);

    // get drug pilots tracks, return our two fakes above
    $httpBackend.expect('GET', 'http://api.soundcloud.com/tracks?user_id=drugpilots&client_id=d9b33cd16dce9e1246585008747cca58&format=json&_status_code_map')
        .respond(200, fakeDrugPilotsTracks);

    // ok I wanted to get the service to make these things itself but couldn't figure out how.
    playerService.deepGraySeaTracks = fakeDeepGraySeaTracks;
    playerService.soloPianoTracks = fakeSoloPianoTracks;
    playerService.drugPilotsTracks = fakeDrugPilotsTracks;

    // make the little methods do some work
    spyOn(playerService, 'selectArtist').and.callThrough();
    spyOn(playerService, 'selectTrack').and.callThrough();

  }));

  it('select artist "deep gray sea" should select and load the correct artist and tracks', function() {
    playerService.selectArtist('deep gray sea', true); // second param = load the track
    expect(playerService.selectedArtist).toBe('deep gray sea');
    expect(playerService.selectedArtistTracks).toEqual(fakeDeepGraySeaTracks);
    expect(playerService.selectTrack).toHaveBeenCalled();
    expect(playerService.selectedTrack).toEqual(fakeDeepGraySeaTracks[0]);
  });

  it('select artist "solo piano" should select and load the correct artist and tracks', function() {
    playerService.selectArtist('solo piano', true); // second param = load the track
    expect(playerService.selectedArtist).toBe('solo piano');
    expect(playerService.selectedArtistTracks).toEqual(fakeSoloPianoTracks);
    expect(playerService.selectTrack).toHaveBeenCalled();
    expect(playerService.selectedTrack).toEqual(fakeSoloPianoTracks[0]);
  });

  it('select artist "drug pilots" should select and load the correct artist and tracks', function() {
    playerService.selectArtist('drug pilots', true); // second param = load the track
    expect(playerService.selectedArtist).toBe('drug pilots');
    expect(playerService.selectedArtistTracks).toEqual(fakeDrugPilotsTracks);
    expect(playerService.selectTrack).toHaveBeenCalled();
    expect(playerService.selectedTrack).toEqual(fakeDrugPilotsTracks[0]);
  });

  it('select artist "deep gray sea" with 2nd param false should select the correct artist but not load a track', function() {
    playerService.selectArtist('deep gray sea', false); // second param = don't load the track
    expect(playerService.selectedArtist).toBe('deep gray sea');
    expect(playerService.selectedArtistTracks).toEqual(fakeDeepGraySeaTracks);
    expect(playerService.selectTrack).not.toHaveBeenCalled();
  });

  it('select artist "solo piano" with 2nd param false should select the correct artist but not load a track', function() {
    playerService.selectArtist('solo piano', false); // second param = don't load the track
    expect(playerService.selectedArtist).toBe('solo piano');
    expect(playerService.selectedArtistTracks).toEqual(fakeSoloPianoTracks);
    expect(playerService.selectTrack).not.toHaveBeenCalled();
  });

  it('select artist "drug pilots" with 2nd param false should select the correct artist but not load a track', function() {
    playerService.selectArtist('drug pilots', false); // second param = don't load the track
    expect(playerService.selectedArtist).toBe('drug pilots');
    expect(playerService.selectedArtistTracks).toEqual(fakeDrugPilotsTracks);
    expect(playerService.selectTrack).not.toHaveBeenCalled();
  });

  it('select track should load that track for streaming', inject(function($httpBackend) {
    // call to get the dgs track 'Moan'
    $httpBackend.expect('GET', 'http://api.soundcloud.com/tracks/193109089?client_id=d9b33cd16dce9e1246585008747cca58&format=json&_status_code_map')
        .respond(200, {someRandomBaloney: 'xyz'});

    playerService.selectTrack(fakeDeepGraySeaTracks[0]);
    expect(playerService.selectedTrack).toBe(fakeDeepGraySeaTracks[0]);
    expect(playerService.selectedTrack.title).toEqual('Moan');
    expect(playerService.selectedTrackPlayPosition).toEqual(0);
  }));

  it('select track from page should first select the artist and then select the track', inject(function($httpBackend) {
    // call to get the dgs track 'Hurt' (2nd in list)
    $httpBackend.expect('GET', 'http://api.soundcloud.com/tracks/181276209/streams?client_id=d9b33cd16dce9e1246585008747cca58&format=json&_status_code_map')
        .respond(200, {diffoRandomBaloney: 'xyz'});

    playerService.selectTrackFromPage('deep gray sea', fakeDeepGraySeaTracks[1]);
    expect(playerService.selectArtist).toHaveBeenCalled();
    expect(playerService.selectedArtist).toBe('deep gray sea');
    expect(playerService.selectedArtistTracks).toEqual(fakeDeepGraySeaTracks);

    expect(playerService.selectTrack).toHaveBeenCalled();
    expect(playerService.selectedTrack).toEqual(fakeDeepGraySeaTracks[1]);
  }));

});

describe('SoundCloud audio player controller tests', function() {
  var playerCtrl,
      scope,
      playerService;

  beforeEach(module('m2App'));

  beforeEach(inject(function($rootScope, $controller, _PlayerService_) {
    scope = $rootScope.$new();
    playerService = _PlayerService_;
    playerCtrl = $controller('PlayerCtrl', {'$scope' : scope, 'PlayerService': playerService });
    scope.$apply();
  }));

  it('should have access to properties and methods of the player service', function() {
    expect(scope.playerService).toBeDefined();
    expect(scope.playerService.deepGraySeaTracks).toBeDefined();
    expect(scope.playerService.soloPianoTracks).toBeDefined();
    expect(scope.playerService.drugPilotsTracks).toBeDefined();
    expect(scope.playerService.selectedArtist).toBeDefined();
    expect(scope.playerService.selectedArtistTracks).toBeDefined();
    expect(scope.playerService.selectedTrack).toBeDefined();
    expect(scope.playerService.selectedTrackPlayPosition).toBeDefined();
    expect(scope.playerService.selectedTrackPlaying).toBeDefined();
    expect(scope.playerService.selectArtist).toBeDefined();
    expect(scope.playerService.selectTrack).toBeDefined();
    expect(scope.playerService.selectTrackFromPage).toBeDefined();
  });
});
