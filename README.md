<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<title>详情</title>
	<link rel="stylesheet" href="/stylesheets/base.css" />
	<script src="/javascripts/jquery.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="/javascripts/FileSaver.js" type="text/javascript" charset="utf-8"></script>
	<script src="/javascripts/jquery.wordexport.js" type="text/javascript" charset="utf-8"></script>
	<script src="https://cdn.bootcss.com/lodash.js/4.17.10/lodash.core.js"></script>
	<style>
		* {
			padding: 0;
			margin: 0;
			font-size: 14px;
			font-family: "微软雅黑";
		}

		ul,
		ol,
		dl {
			padding: 0;
			margin: 0;
		}

		li {
			list-style: none;
		}

		a {
			text-decoration: none;
			color: #000;
		}

		.clearfix:after {
			display: block;
			content: '';
			clear: both;
		}

		.clearfix {
			zoom: 1;
		}

		.fl {
			float: left;
		}

		.fr {
			float: right;
		}

		a img {
			border: none;
		}

		#app * {
			word-wrap: break-word;
		}

		.nice-auction {
			display: block;
			width: 100%;
			height: 240px;
			overflow: hidden;
			position: relative;
		}

		#nice-auction-box {
			transition: 1s all ease;
			position: absolute;
			top: 0;
			left: 0;
			height: 240px;
			line-height: 240px;
			margin: auto;
			padding: 0;
			background: #f9f9f9;
		}

		#nice-auction-box div {
			float: left;
			width: 375px;
			height: 240px;
			height: 240px;
			text-align: center;
			top: 0;
			left: 0;
		}

		#nice-auction-box img {
			max-width: 100%;
			max-height: 100%;
			width: auto;
			height: auto;
		}

		#nice-auction-button {
			position: absolute;
			height: 20px;
			bottom: 20px;
			left: 0;
			right: 0;
			margin: auto;
			width: 100%;
			text-align: center;
		}

		#nice-auction-button i {
			display: inline-block;
			width: 10px;
			height: 10px;
			margin: 2px;
			border-radius: 50%;
			background: #fff;
			cursor: pointer;
			box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.2);
		}

		#nice-auction-button i.btnActive {
			background: #faad14;
		}

		.nice-details-box {
			width: 100%;
		}

		.nice-details-box h2 {
			width: 100%;
			font-size: 18px;
			font-weight: bold;
			color: #000;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		.nice-content-title {
			text-align: center;
			margin-bottom: 20px;
		}

		.nice-content-title span {
			color: #000;
			font-size: 16px;
		}

		.nice-content-title div {
			width: 28px;
			height: 2px;
			margin: 2px auto;
			background: #000;
		}

		.nice-content-list li {
			width: 100%;
			height: 28px;
			line-height: 28px;
		}

		.nice-content-list li>span {
			display: inline-block;
			width: 8px;
			height: 8px;
			margin: 0 10px;
			border-radius: 50%;
			background: #faad14;
		}

		.nice-content-item-title {
			font-size: 16px;
			color: #333;
			margin-bottom: 10px;
			line-height: 1.2;
			word-wrap: break-word;
		}

		.nice-content-item-text {
			color: #666;
			margin-bottom: 10px;
			line-height: 1.6;
			word-wrap: break-word;
			font-size: 14px;
		}

		.nice-content-text {
			margin-bottom: 10px;
			line-height: 1.6;
			word-wrap: break-word;
		}

		.nice-content-img>img,
		.nice-content-items>img {
			width: 100%;
			height: auto;
		}

		body,
		html {
			background: #ececec;
			-webkit-font-smoothing: antialiased;
			color: #333;
		}

		#app {
			width: 375px;
			margin: 20px auto;
			padding: 20px;
			background: #fff;
			box-sizing: border-box;
		}

		h2#title {
			width: 100%;
			font-size: 18px;
			font-weight: bold;
			color: #000;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		.summary {
			margin-top: 10px;
			font-size: 14px;
			line-height: 14px;
			color: #888;
			border-left: 1px solid #eee;
			padding-left: 6px;
			display: none;
		}

		#subTitle {
			display: none;
		}

		.coverImg {
			width: 100%;
			height: 220px;
			line-height: 220px;
			margin-bottom: 10px;
			display: none;
		}

		img {
			max-width: 100%;
			max-height: 100%;
			height: auto;
			margin: auto;
			display: block;
		}

		#coverImageMore {
			position: relative;
			display: none;
			margin-bottom: 10px;
		}

		#niceListBox {
			display: none;
		}

		#editor {
			font-size: 14px;
			color: #666;
		}

		#editor img {
			margin: 10px auto 10px;
		}

		.anchorImageList {
			width: 100%;
			height: auto;
			margin-bottom: 20px;
			display: none;
		}

		.anchorImageList>img {
			width: 100%;
			height: 100%;
		}

		.auctionBox {
			position: relative;
		}

		.auctionPrice {
			position: absolute;
			bottom: 40px;
			right: 5px;
			background: #f70;
			padding: 2px 5px;
			border-radius: 20px;
			cursor: pointer;
		}

		.auctionPrice span {
			margin: 0 5px;
			font-size: 12px;
		}

		.alignCenter {
			text-align: center;
		}

		.alignJustify {
			text-align: justify;
		}

		.alignRight {
			text-align: right;
		}

		.messageBlock {
			top: 0px;
			right: 2%;
			width: 340px;
			height: 50%;
			background-color: #fff;
			border-radius: 6px;
		}

		.submit {
			height: 32px;
			margin-top: 10px;
			border-radius: 3px;
			outline: none;
			color: #fff;
			background-color: #00b395;
			border-color: #00b395;
		}

		.submit:hover {
			cursor: pointer;
		}

		.struct-canvas-title {
			font-size: 20px;
			color: #666;
			text-align: center;
			word-wrap: break-word;
		}

		.struct-canvas-topNum img {
			width: 70px;
			height: auto;
			margin-bottom: 10px;
		}

		.buttons {
			position: fixed;
			top: 20px;
			right: 20px;
		}
	</style>
</head>

<body>
	<div id="buttons" class="buttons">
		<button id="export" class="submit" style="width: 80px;" onclick="handleExportWord()">导出</button>
	</div>
	<div id="zhenti" style=" width: 1000px; position:relative; margin: 0 auto">
		<div class="box" id="app" style="margin-left: 50px">
			<section id="taskBox" style="display: none;">
				<div class="coverImg" id="coverImg">
					<img crossOrigin="anonymous" src="//img.alicdn.com/imgextra/i1/2244176898/TB23C5baHGYBuNjy0FoXXciBFXa_!!2244176898-2-daren.png_294x430q90.jpg"
					 style="width: 100%; height: 100%;" />
				</div>
				<div id="coverImageMore">
					<a target="_blank" href="javascript:;" class="nice-auction">
						<div id="nice-auction-box" class="clearfix">
						</div>
					</a>
					<div id="nice-auction-button">
					</div>
				</div>
				<div class="anchorImageList" id="anchorImageList">

				</div>
				<div style="margin-bottom: 20px;">
					<h2 id="title"></h2>
					<h3 class="summary" id="summary"></h3>
					<h3 id="subTitle"></h3>
				</div>
				<div class="clearfix" style="color: rgb(255, 80, 0);display: none;">
					<span class="fr" id="goodsPrice"></span>
				</div>
				<div class="content" id="editor"></div>
				<div>
					<a target="_blank" id="endlink" href="" style="font-size: 14px; color: #6AF; display: none;"></a>
				</div>
				<div id="niceListBox">
					<div class="nice-content-title">
						<span></span>
						<div></div>
					</div>
					<ul class="nice-content-list" id="niceContentList"></ul>
				</div>
				<div id="niceContent"></div>
			</section>
		</div>

		<div id="" style="height: 500px; position:absolute; left: 450px" class="messageBlock" oncontextmenu='return false'>
			<div style="width: 320px;background: #f5f5f5; height: 20px; padding: 10px">
				批注
				<button id="clear" style=" background: #f5f5f5;float: right; margin-right: 10; color: #00b395;  ">清空批注</button>
			</div>
			<button id="add" style="z-index:999; display: none; border: 1px solid #ccc; border-radius: 3px; width: 100px; color: #666"
			 onclick="addnotes()">添加批注</button>
			<button id="editnotes" style="display: none" onclick="editnote(xiabiao)">编辑</button>
			<button id="clearnotes" style="display: none" onclick="remove(xiabiao)">删除</button>

			<div id="whole" style="width: 100%; height:100%; background: #fff; overflow: hidden; z-index: 9 ">
				<div id="content" style=" width: 100%; height:100%; z-index: -1" oncontextmenu="fnContextMenu()" onclick="visible()">
					<div id="notes" style="overflow: hidden; display: none;height: 155px; width: 80%; overflow: hidden; border-radius: 3px; margin: 20px; border: 0.5px solid #ccc;box-shadow: 0px 1px 5px #fff;">
						<div style="width: 320px; background: #eee; height: 15px; padding: 10px">
							<span>批注</span>
							<a id="off" style="margin-left: 210px">×</a>
						</div>
						<div>
							<textarea id="textarea" placeholder="请在这里输入批注内容" oninput="handleMessageChange(this.value)" style="width: 270px; border: none;  background: #fff"
							 name="" id="" cols="30" rows="5"></textarea>
						</div>
						<button style="width: 100%; height:32px; border: 1px solid #00b395; position:absolute; bottom:0; background: #00b395; color: #fff"
						 onclick="handleSubmit()">确定</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script>
		var task = {};
		var unique = {};
		const add = document.getElementById('add')
		const notes = document.getElementById('notes')
		const textarea = document.getElementById('textarea')
		var x = ''
		var y = ''
		var data = []
		var before = []
		var mch_appv_notes = []
		var data_edit_index = ''
		var task_edit_index = ''
		$('#off').on('click', function(e) {
			notes.style.display= 'none'
		})
		$('#clear').on('click', function (e) {
			$.ajax({
				type: "PUT",
				url: origin + "/api/task/update/public",
				contentType: 'application/json',
				data: JSON.stringify({
					_id: query._id,
					mch_appv_notes: [],
				}),
				success: function (result) {
					// task.mch_appv_notes.length = 0
					list.length = 0
					$('p').remove("#addnotes")
				}
			});
		})
		visible = () => {
			add.style.display = 'none';
			$('#clearnotes').css({
				display: 'none',
			})
			$('#editnotes').css({
				display: 'none',
			})
		}
		addnotes = (event) => {
			var e = event || window.event;
			notes.style.display = 'block';
			notes.style.position = 'absolute';
			notes.style.zIndex = '9999';
			notes.style.top = 10 + 'px';
			add.style.display = 'none';
			notes.style.marginTop = e.offsetY - 100 + 'px';
			textarea.value = ''
		}

		fnContextMenu = (event) => {
			var e = event || window.event;
			add.style.display = 'block';
			add.style.position = 'absolute'
			add.style.marginLeft = e.offsetX + 'px';
			add.style.marginTop = e.offsetY + 'px';
			x = e.offsetX
			y = e.offsetY
		}
		var xiabiao = ''
		var notesvalue = ''
		var buchongfu = []
		function edit(index) {
			xiabiao = index
			add.style.display = 'none';
			console.log(index)
			console.log(list)
			console.log(task.mch_appv_notes[index])
			console.log(list[index])
			if (list.length > 0) {
				console.log('新')
				var value = list[index]
				notesvalue = value.message
				$('#clearnotes').css({
					position: 'absolute',
					zIndex: '9999',
					display: 'block',
					marginLeft: value.x + 'px',
					marginTop: value.y + 'px',
					top: 80 + 'px'
				})
				$('#editnotes').css({
					position: 'absolute',
					zIndex: '9999',
					display: 'block',
					marginLeft: value.x + 'px',
					marginTop: value.y + 'px',
					top: 80 + 'px',
					left: 40 + 'px'
				})
			} else {
				console.log('旧')
				var value = task.mch_appv_notes[index]
				$('#clearnotes').css({
					position: 'absolute',
					zIndex: '9999',
					display: 'block',
					marginLeft: value.x + 'px',
					marginTop: value.y + 'px',
					top: 80 + 'px'
				})
				$('#editnotes').css({
					position: 'absolute',
					zIndex: '9999',
					display: 'block',
					marginLeft: value.x + 'px',
					marginTop: value.y + 'px',
					top: 80 + 'px',
					left: 40 + 'px'
				})
			}
		}

		var strHref = decodeURI(location.href).substring(decodeURI(location.href).indexOf('?') + 1).split('&');
		var query = {};

		for (var i = 0; i < strHref.length; i++) {
			var arr = strHref[i].split('=');
			query[arr[0]] = arr[1];
		}
		var hostname = location.hostname;
		var origin = '';
		if (hostname === 'localhost') {
			origin = 'http://localhost:3000';
		} else if (hostname === 'test.nicai360.com') {
			origin = 'http://testapi.nicai360.com';
		} else {
			origin = 'http://api.nicai360.com';
		}
		if (query.view === 'export') {
			$('#buttons').hide();
			$('#messageBlock').hide();
		}
		var approve_note_changed = false;
		var approve_note = '';
		function handleMessageChange(value) {
			approve_note = value;
			approve_note_changed = true;
		}
		var object = {}
		var list = []
		var fangzhi = []
		function handleSubmit() {
			object = {
				message: approve_note,
				x,
				y
			}
			console.log(object)
			console.log(task.mch_appv_notes)
			console.log(list)
			notes.style.display = 'none'
			console.log(current_edit_index)
			if(current_edit_index !== '') {
				console.log(object)
				console.log('有修改值')
				console.log(list)
				console.log(list)
				console.log(list[current_edit_index])
				list[current_edit_index] = object
				console.log(list)
				// _.uniqBy(list, 'message')
				// putNotes({
				// 	_id: query._id,
				// 	mch_appv_notes: task.mch_appv_notes
				// }, function (result) {
				// 	if (!result.error) {
				// 		console.log('修改后刷新')
				// 		$('p').remove("#addnotes")
				// 		list.forEach((item, index) => {
				// 			$('#whole').append(`
				// 			<p id="addnotes" 
				// 				style="position:absolute;margin-left:${item.x + 'px'};margin-top:${-(500 - item.y) + 'px'};width: 10 px" 
				// 				oncontextmenu="edit(${index})">
				// 			${item.message}
				// 			</p>`)
				// 		})
				// 	}
				// })
			}
			if(task_edit_index !== '') {
				console.log(approve_note)
				console.log(object)
				console.log(task.mch_appv_notes)
				console.log(task.mch_appv_notes[task_edit_index])
				task.mch_appv_notes[task_edit_index] = object
				putNotes({
					_id: query._id,
					mch_appv_notes: task.mch_appv_notes
				}, function (result) {
					if (!result.error) {
						$('p').remove("#addnotes")
						task.mch_appv_notes.forEach((item, index) => {
							$('#whole').append(`
							<p id="addnotes" 
								style="position:absolute;margin-left:${item.x + 'px'};margin-top:${-(500 - item.y) + 'px'};width: 10 px" 
								oncontextmenu="edit(${index})">
							${item.message}
							</p>`)
						})
					}
				})
				// console.log(task_edit_index)
				// console.log('修改以前值')
				// task.mch_appv_notes[task_edit_index].message  = approve_note 
				// console.log(task.mch_appv_notes)
				// $('p').remove("#addnotes")
				// task.mch_appv_notes.forEach((item, index) => {
				// 	$('#whole').append(`
				// 	<p id="addnotes" 
				// 		style="position:absolute;margin-left:${item.x + 'px'};margin-top:${-(500 - item.y) + 'px'};width: 10 px" 
				// 		oncontextmenu="edit(${index})">
				// 	${item.message}
				// 	</p>`)
				// })
			}
			
			data.push(object)
			list.push(object)
			console.log(list)
			function unique(arr) {
				return Array.from(new Set(arr))
			}
			list = unique(list)

			list.forEach((item, index) => {
				$('#whole').append(`
				<p id="addnotes" 
					style="position:absolute;margin-left:${item.x + 'px'};margin-top:${-(500 - item.y) + 'px'};width: 10 px" 
					oncontextmenu="edit(${index})">
				${item.message}
				</p>`)
			})
			console.log(list)
			console.log(task.mch_appv_notes)
			task.mch_appv_notes.forEach(item => {
				list.push(item)
			})
			if (task.mch_appv_notes.length !== 0 && task.mch_appv_notes.message !== undefined){
				task.mch_appv_notes.forEach(item => {
					list.push(item)
					fangzhi.push(item)
				})
			} else {
				task.mch_appv_notes = ''
			}
			
			function unique(arr) {
				return Array.from(new Set(arr))
			}
			list = unique(list)
			// list.forEach(function(fang) {
			// 	unique[JSON.stringify(fang)] = fang
			// })
			// list = Object.keys(unique).map(function(u) {
			// 	return JSON.parse(u)
			// })
			console.log(list)
			
			// 有新值之后删除原数据插入新数据
			console.log(list.length)
			console.log(task.mch_appv_notes.length)
			if(list.length > task.mch_appv_notes.length ) {
				console.log('被执行')
				$('p').remove("#addnotes")
				list.forEach((item, index) => {
					$('#whole').append(`
					<p id="addnotes" 
						style="position:absolute;margin-left:${item.x + 'px'};margin-top:${-(500 - item.y) + 'px'};width: 10 px" 
						oncontextmenu="edit(${index})">
					${item.message}
					</p>`)
				})
			} else {
				task.mch_appv_notes.forEach(item => {
					list.push(item)
					$('p').remove("#addnotes")
					list.forEach((item, index) => {
						$('#whole').append(`
						<p id="addnotes" 
							style="position:absolute;margin-left:${item.x + 'px'};margin-top:${-(500 - item.y) + 'px'};width: 10 px" 
							oncontextmenu="edit(${index})">
						${item.message}
						</p>`)
					})
				})
			}

			if (approve_note_changed) {
				putNotes({
					_id: query._id,
					mch_appv_notes: list,
				}, function (result) {
					if (result.error) {
						alert(result.msg);
					}
				})
			} else {
				if (approve_note) {
					alert('您没有做出任何修改');
				} else {
					alert('您还未填写要提交的内容');
				}
			}
			approve_note_changed = false
			// task.mch_appv_notes.length = 0
			data.length = 0
		}
		var current_edit_index = ''
		var task_edit_index = ''
		function editnote(index) {
			console.log(list)
			console.log(task.mch_appv_notes)
			var e = event || window.event;
			notes.style.display = 'block';
			notes.style.position = 'absolute';
			notes.style.zIndex = '9999';
			notes.style.marginTop = e.offsetY + 250 + 'px';
			
			if (list.length > 0) {
				console.log('这是新值')
				console.log(list[index].message)
				current_edit_index = index
				// $('#textarea').text(list[index].message)
			} else if(task.mch_appv_notes.length > 0) {
				task_edit_index = index
				console.log('过了老值')
				$('#textarea').text(task.mch_appv_notes[index].message)
			}
		}
		function remove(index) {
			if (list.length >= 1) {
				console.log('新值')
				list.splice(index, 1)
				console.log(list)
				if (list.length === 0){
					$.ajax({
						type: "PUT",
						url: origin + "/api/task/update/public",
						contentType: 'application/json',
						data: JSON.stringify({
							_id: query._id,
							mch_appv_notes: [],
						}),
						success: function (result) {
							console.log('dfg')
						}
					});
				}
				putNotes({
					_id: query._id,
					mch_appv_notes: list
				}, function(result) {
					console.log('新值删除成功')
					task.mch_appv_notes.length = 0
					$('p').remove("#addnotes")
					list.forEach((item, index) => {
						$('#whole').append(`
							<p id="addnotes" 
									style="position:absolute;margin-left:${item.x + 'px'};margin-top:${-(500 - item.y) + 'px'};width: 10 px" 
									oncontextmenu="edit(${index})">
								${item.message}
							</p>
						`)
					})
				})
				$('#clearnotes').css({
					display: 'none'
				})
				$('#editnotes').css({
					display: 'none'
				})
			}  else if(task.mch_appv_notes.length >= 1) {
				console.log(task.mch_appv_notes)
				task.mch_appv_notes.splice(index, 1)
				console.log(task.mch_appv_notes)
				if (task.mch_appv_notes.length == 0){
					$.ajax({
						type: "PUT",
						url: origin + "/api/task/update/public",
						contentType: 'application/json',
						data: JSON.stringify({
							_id: query._id,
							mch_appv_notes: [],
						}),
						success: function (result) {
							console.log('dfg')
						}
					});
				}
				putNotes({
					_id: query._id,
					mch_appv_notes: task.mch_appv_notes
				}, function(result) {
					$('p').remove("#addnotes")
					task.mch_appv_notes.forEach((item, index) => {
						$('#whole').append(`
							<p id="addnotes" 
									style="position:absolute;margin-left:${item.x + 'px'};margin-top:${-(500 - item.y) + 'px'};width: 10 px" 
									oncontextmenu="edit(${index})">
								${item.message}
							</p>
						`)
					})
				})
				$('#clearnotes').css({
					display: 'none'
				})
				$('#editnotes').css({
					display: 'none'
				})
			} else {
				$.ajax({
						type: "PUT",
						url: origin + "/api/task/update/public",
						contentType: 'application/json',
						data: JSON.stringify({
							_id: query._id,
							mch_appv_notes: [],
						}),
						success: function (result) {
							console.log('dfg')
						}
					});
			}
			
			// before.forEach(item => {
			// 	a.push(item)
			// })

			// a.splice(index, 1)
			// console.log(a)
			// $('#whole', '#addnotes').empty();
			// putNotes({
			// 	_id: query._id,
			// 	mch_appv_notes: a
			// }, function (result) {
			// })
			// a.length = 0
					// data.forEach((item, index) => {
					// 	$('#whole').append(`
					// 		<p id="addnotes" 
					// 			style="position:absolute;margin-left:${item.x + 'px'};margin-top:${-(500 - item.y) + 'px'};width: 10 px" 
					// 			oncontextmenu="edit('${index}')">
					// 			${item.message}
					// 		</p>`)
					// })
					// if (list.length > 0) {
					// 	console.log('执行新的')
					// 	list.splice(index, 1)
					// 	console.log(list)
					// 	putNotes({
					// 		_id: query._id,
					// 		mch_appv_notes: data
					// 	}, function(result) {
					// 		if(!result.error) {
					// 			$('#addnotes').empty();
					// 			data.forEach((item, index) => {
					// 				$('#whole').append(`
					// 					<p id="addnotes" 
					// 						style="position:absolute;margin-left:${item.x + 'px'};margin-top:${-(500 - item.y) + 'px'};width: 10 px" 
					// 						oncontextmenu="edit('${index}')">
					// 					${item.message}
					// 				</p>`)
					// 			})
					// 		} else {
					// 			alert(result.msg)
					// 		}
					// 	})
					// } else if (data.length > 1) {
					// 	console.log('执行老的')
					// 	data.splice(index, 1)
					// 	putNotes({
					// 		_id: query._id,
					// 		mch_appv_notes: data
					// 	}, function(result) {
					// 		if(!result.error) {
					// 			$('#addnotes').empty();
					// 			// list.forEach(item => {
					// 			// 	$('#whole').append(`
					// 			// 		<p id="addnotes" 
					// 			// 			style="position:absolute;margin-left:${item.x + 'px'};margin-top:${-(500 - item.y) + 'px'};width: 10 px" 
					// 			// 			oncontextmenu="edit(${index})">
					// 			// 		${item.message}
					// 			// 	</p>`)
					// 			// })
					// 		} else {
					// 			alert(result.msg)
					// 		}
					// 	})

					// } else if (data.length == 1) {
					// 	nullList(function(result) {
					// 		if(!result.error) {
					// 		} else {
					// 			alert(result.msg)
					// 		}
					// 	})
					// }  else  {
					// 	nullList(function(result) {
					// 		if(!result.error) {
					// 			alert('删除成功请刷新页面')
					// 		} else {
					// 			alert(result.msg)
					// 		}
					// 	})
					// }
				}
				function putNotes(data, callback) {
					$.ajax({
						type: "PUT",
						url: origin + "/api/task/update/public",
						data: data,
						success: function (result) {
							callback(result)
						}
					})
				}
				function nullList(callback) {
					$.ajax({
						type: "PUT",
						url: origin + "/api/task/update/public",
						contentType: 'application/json',
						data: JSON.stringify({
							_id: query._id,
							mch_appv_notes: [],
						}),
						success: function (result) {
							callback(result)
						}
					});
				}

				function handleExportWord() {
					$("#taskBox").wordExport(task.title || task.name);
				}
				$(function () {
					$('#nice-auction-button').on('click', 'i', function (e) {
						$('#nice-auction-box').css({ left: '-' + $(this).index() * 375 + 'px' });
						$('#nice-auction-button i').removeClass('btnActive');
						$(this).addClass('btnActive');
					});
					if (query._id) {
						getTask();
					}
					function getTask() {
						$.ajax({
							type: "GET",
							url: origin + "/api/task",
							data: {
								_id: query._id
							},
							success: function (result) {
								if (!result.error && result.task && result.task.children) {
									task = result.task;
									setTask(result.task.children);
									result.task.mch_appv_notes ? result.task.mch_appv_notes.forEach((item, index) => {
										y = item.y
										x = item.x
										before.push(item)
										$('#whole').append(`
									<p id="addnotes" 
										style="position:absolute;margin-left:${item.x + 'px'} ;margin-top:${-(500 - item.y) + 'px'};width: 10 px; z-index: 999" 
										oncontextmenu= "edit(${index})"
										>${item ? item.message : ''}
									</p>`)
										approve_note = item.message;
									}) : null

									if (query.view === 'export') {
										var imgLoadNum = 0;
										$('img').each(function () {
											$(this).load(function () {
												imgLoadNum++;
												if (imgLoadNum === $('img').length) {
													$("#export").click();
												}
											});
										});
									}
								}
							}
						});
					}
					function setTask(children) {
						$('#taskBox').show();
						children.forEach(function (item) {
							if (item.name === 'title') {
								setTitle(item.props.value);
							} else if (item.name === 'summary') {
								if (children.find(item1 => item1.component === 'Editor')) {
									setSummary(item.props.value);
								} else {
									setSummaryBody(item.props.value);
								}
							} else if (item.name === 'subTitle') {
								setSubTitle(item.props.value);
							} else if (item.name === 'standardCoverUrl' && children.findIndex(item1 => item1.component === 'AnchorImageList') === -1) {
								setCoverImg(item.props.value);
							} else if (item.component === 'StructCanvas' && item.name === 'bodyStruct') {
								setBodyStruct(item.props.value);
							} else if (item.name === 'link') {
								setLink(item.props.value);
							} else if (item.component === 'Editor') {
								setEditor(item.props.value);
							} else if (item.component === 'CreatorAddItem') {
								setCreatorAddItem(item.props.value);
							} else if (item.component === 'CreatorAddSpu') {
								setCreatorAddSpu(item.props.value);
							} else if (item.component === 'AnchorImageList') {
								setAnchorImageList(item.props.value);
							} else if (item.component === 'StructCanvas' && item.name === 'body') {
								if (item.props.enableAutoOrder === 'single-item-rank:topNum;' || item.props.enableAutoOrder === 'single-item-inventory:topNum;') {
									setStructCanvasBody(item.props.value);
								}
							}
						});
					}
					function setTitle(value) {
						$('#title').html(value || '');
					}
					function setSummary(value) {
						if (value) {
							$('#summary').show();
							$('#summary').html(value);
						}
					}
					function setSummaryBody(value) {
						$('#editor').html(value);
					}
					function setSubTitle(value) {
						if (value) {
							// $('#subTitle').show();
							$('#subTitle').html(value);
						}
					}
					function setCoverImg(value) {
						if (value && value.length === 1) {
							$('#coverImg').show();
							$('#coverImg').html('<img crossOrigin="anonymous" src="' + value[0].url + '" />');
						} else if (value && value.length > 1) {
							$('#coverImageMore').show();
							value.forEach(function (item, index) {
								$('<div><img crossOrigin="anonymous" src="' + item.url + '" alt=""></div>').appendTo($('#nice-auction-box'));
								if (index === 0) {
									$('<i></i>').addClass('btnActive').appendTo($('#nice-auction-button'));
								} else {
									$('<i></i>').appendTo($('#nice-auction-button'));
								}
								$('#nice-auction-box').css({ width: (value.length) * 100 + '%' });
							});
						}
					}
					function setLink(value) {
						if (value && value.length > 0) {
							$('#endlink').show();
							$('#endlink').html(value[0].text);
							$('#endlink').prop('href', value[0].link);
						}
					}
					function setCreatorAddItem(value) {
						if (value && value.length > 0) {
							var auction = value[0];
							$('#coverImageMore').show();
							$('#coverImageMore>a').prop('href', auction.resourceUrl);
							$('<div><img crossOrigin="anonymous" src="' + auction.coverUrl + '" alt=""></div>').appendTo($('#nice-auction-box'));
							$('<i></i>').addClass('btnActive').appendTo($('#nice-auction-button'));
							$('#nice-auction-box').css({ width: (auction.extraBanners.length + 1) * 100 + '%' });
							if (auction.extraBanners && auction.extraBanners.length > 0) {
								for (var i = 0; i < auction.extraBanners.length; i++) {
									if (auction.extraBanners[i] !== auction.coverUrl) {
										$('<div><img crossOrigin="anonymous" src="' + auction.extraBanners[i] + '" alt=""></div>').appendTo($('#nice-auction-box'));
										$('<i></i>').appendTo($('#nice-auction-button'));
									}
								}
							}
							if (auction.price) {
								$('#goodsPrice').parent().show();
								$('#goodsPrice').html('¥' + auction.price);
							}
						}
					}
					function setCreatorAddSpu(value) {
						if (value && value.length > 0) {
							var auction = value[0];
							$('#coverImageMore').show();
							$('#coverImageMore>a').prop('href', 'https://spu.taobao.com/product/detail.htm?spuId=' + auction.spuId);
							$('<div><img crossOrigin="anonymous" src="' + auction.coverUrl + '" alt=""></div>').appendTo($('#nice-auction-box'));
							$('<i></i>').addClass('btnActive').appendTo($('#nice-auction-button'));
							$('#nice-auction-box').css({ width: (auction.extraBanners.length + 1) * 100 + '%' });
							if (auction.extraBanners && auction.extraBanners.length > 0) {
								for (var i = 0; i < auction.extraBanners.length; i++) {
									$('<div><img crossOrigin="anonymous" src="' + auction.extraBanners[i] + '" alt=""></div>').appendTo($('#nice-auction-box'));
									$('<i></i>').appendTo($('#nice-auction-button'));
								}
							}
						}
					}
					function setBodyStruct(value) {
						if (value[0].data && value[0].data.features && value[0].data.features.length > 0) {
							$('#niceListBox').show();
							$('#niceListBox > div > span').text('好在哪里');
							var goodsList = '';
							value[0].data.features.forEach(function (item) {
								goodsList += '<li><span></span>' + item + '</li>';
							});
							$(goodsList).appendTo($('#niceContentList'));
						}
						if (value.length > 1) {
							var bodyStruct = value.slice(1);
							var goodsContent = '';
							bodyStruct.forEach(function (item) {
								if (item.data.title) {
									goodsContent += '<article>' +
										'<div class="nice-content-title">' +
										'<span>' + item.data.title + '</span>' +
										'<div></div>' +
										'</div>' +
										'<div class="nice-content-text">' + item.data.desc + '</div>' +
										'<div class="nice-content-img">' +
										'<img crossOrigin="anonymous" src="' + item.data.images[0].picUrl + '">' +
										'</div>' +
										'</article>';
								}
							});
							$(goodsContent).appendTo($('#niceContent'));
						}
					}
					function setEditor(value) {
						var count = 0;
						var html = '';
						if (value && value.blocks.length > 0) {
							value.blocks.forEach(function (item, index) {
								if (item.type === 'atomic' && item.entityRanges && item.entityRanges.length > 0) {
									var entity = value.entityMap[item.entityRanges[0].key];
									if (entity.type && entity.type === 'SIDEBARIMAGE') {
										html += '<p><img crossOrigin="anonymous" src="' + entity.data.url + '"></p>';
									} else if (entity.type && entity.type === 'SIDEBARADDSHOP') {
										html += '<p><img crossOrigin="anonymous" src="' + entity.data.coverUrl + '"></p>';
									} else {
										html += '<p class="auctionBox"><a target="_blank" href="' + entity.data.resourceUrl + '"><img crossOrigin="anonymous" src="' + entity.data.coverUrl + '"></a><a target="_blank" href="' + entity.data.resourceUrl + '"class="auctionPrice">';
										if (entity.data.price) {
											html += '<span>¥' + entity.data.price + '</span><span>查看详情</span></a></p>';
										} else {
											html += '<span>查看详情</span></a></p>';
										}
									}
									count += 1;
								} else if (item.text) {
									if (item.type === 'alignCenter') {
										html += '<p class="alignCenter">' + item.text + '</p>';
									} else if (item.type === 'alignRight') {
										html += '<p class="alignRight">' + item.text + '</p>';
									} else if (item.type === 'alignJustify') {
										html += '<p class="alignJustify">' + item.text + '</p>';
									} else {
										html += '<p>' + item.text + '</p>';
									}
								}
							});
							$(html).appendTo($('#editor'));
						}
					}
					function setAnchorImageList(value) {
						if (value.length > 0) {
							$('#anchorImageList').show();
							$('#anchorImageList').html('<img crossOrigin="anonymous" src="' + value[0].url + '" />');
						}
					}
					function setStructCanvasBody(value) {
						var goodsContent = '';
						var topNumList = [
							'https://gw.alicdn.com/tfs/TB1NwXPRpXXXXaqaXXXXXXXXXXX-127-49.png_170x10000.jpg_.webp',
							'https://gw.alicdn.com/tfs/TB1f4ipRpXXXXbrXXXXXXXXXXXX-127-49.png_170x10000.jpg_.webp',
							'http://gw.alicdn.com/tfs/TB1eK1mRpXXXXbVXXXXXXXXXXXX-127-49.png_170x10000.jpg_.webp',
							'http://gw.alicdn.com/tfs/TB1gttKRpXXXXb5aXXXXXXXXXXX-127-49.png_170x10000.jpg_.webp',
							'http://gw.alicdn.com/tfs/TB16VlFRpXXXXc8aXXXXXXXXXXX-127-49.png_170x10000.jpg_.webp',
							'http://gw.alicdn.com/tfs/TB1qV5jRpXXXXcvXXXXXXXXXXXX-127-49.png_170x10000.jpg_.webp',
							'http://gw.alicdn.com/tfs/TB1dhVSRpXXXXcTXVXXXXXXXXXX-127-49.png_170x10000.jpg_.webp',
							'http://gw.alicdn.com/tfs/TB1mzVDRpXXXXapapXXXXXXXXXX-127-49.png_170x10000.jpg_.webp',
							'http://gw.alicdn.com/tfs/TB1UWFWRpXXXXakXVXXXXXXXXXX-127-49.png_170x10000.jpg_.webp',
							'http://gw.alicdn.com/tfs/TB1XkWcRpXXXXbBXpXXXXXXXXXX-127-49.png_170x10000.jpg_.webp',
						];
						value.forEach(function (item, index) {
							if (item.data && item.data.title) {
								goodsContent += '<article>' +
									'<div class="struct-canvas-topNum">' +
									'<img crossOrigin="anonymous" src="' + topNumList[index] + '">' +
									'</div>' +
									'<div class="struct-canvas-title">' + item.data.title + '</div>' +
									'<div class="nice-content-items">' +
									'<img crossOrigin="anonymous" src="' + item.data.items[0].item_pic + '">' +
									'</div>' +
									'<div class="nice-content-item-title">' + item.data.itemTitle + '</div>' +
									'<div class="nice-content-item-text">' + item.data.itemDescription + '</div>' +
									'</article>';
							}
						});
						$(goodsContent).appendTo($('#niceContent'));
					}
				});
	</script>
</body>

</html>
