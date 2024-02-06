const express = require("express");
const router = express.Router();
const debug = require("debug");
const log = debug("integration-service:index:");

const IndexService = require("../../services/index");

const { isVerified } = require("../../middlewares/is_verified");

router.post("/lapdumas", async (req, res) => {
  const lapdumasData = req.body;

  const result = await IndexService.CreateLapdumas(lapdumasData);
  log("result", result);

  if (result.error) {
    return res.status(400).json({
      status: 400,
      error: result.error,
    });
  } else {
    return res.status(200).json({
      status: 200,
      data: result,
    });
  }
});

router.post("/lapdumas/file", async (req, res) => {
  const lapdumasData = req.body;

  const result = await IndexService.CreateLapdumasFiles(lapdumasData);
  log("result", result);

  if (result.error) {
    return res.status(400).json({
      status: 400,
      error: result.error,
    });
  } else {
    return res.status(200).json({
      status: 200,
      data: result,
    });
  }
});

router.post("/penyelidikan", async (req, res) => {
  const penyelidikanData = req.body;

  const result = await IndexService.CreatePenyelidikan(penyelidikanData);
  log("result", result);

  if (result.error) {
    return res.status(400).json({
      status: 400,
      error: result.error,
    });
  } else {
    return res.status(200).json({
      status: 200,
      data: result,
    });
  }
});

router.post("/penyelidikan/file", async (req, res) => {
  const penyelidikanData = req.body;

  const result = await IndexService.CreatePenyelidikanFiles(penyelidikanData);
  log("result", result);

  if (result.error) {
    return res.status(400).json({
      status: 400,
      error: result.error,
    });
  } else {
    return res.status(200).json({
      status: 200,
      data: result,
    });
  }
});

router.post("/penyelidikan/jaksa", async (req, res) => {
  const penyelidikanData = req.body;

  const result = await IndexService.CreatePenyelidikanJaksa(penyelidikanData);
  log("result", result);

  if (result.error) {
    return res.status(400).json({
      status: 400,
      error: result.error,
    });
  } else {
    return res.status(200).json({
      status: 200,
      data: result,
    });
  }
});

router.post("/penyidikan", async (req, res) => {
  const penyidikanData = req.body;

  const result = await IndexService.CreatePenyidikan(penyidikanData);
  log("result", result);

  if (result.error) {
    return res.status(400).json({
      status: 400,
      error: result.error,
    });
  } else {
    return res.status(200).json({
      status: 200,
      data: result,
    });
  }
});

router.post("/penyidikan/file", async (req, res) => {
  const penyidikanData = req.body;

  const result = await IndexService.CreatePenyidikanFiles(penyidikanData);
  log("result", result);

  if (result.error) {
    return res.status(400).json({
      status: 400,
      error: result.error,
    });
  } else {
    return res.status(200).json({
      status: 200,
      data: result,
    });
  }
});

router.post("/penyidikan/jaksa", async (req, res) => {
  const penyidikanData = req.body;

  const result = await IndexService.CreatePenyidikanJaksa(penyidikanData);
  log("result", result);

  if (result.error) {
    return res.status(400).json({
      status: 400,
      error: result.error,
    });
  } else {
    return res.status(200).json({
      status: 200,
      data: result,
    });
  }
});

router.post("/prapenuntutan", async (req, res) => {
  const penuntutanData = req.body;

  const result = await IndexService.CreatePrapenuntutan(penuntutanData);
  log("result", result);

  if (result.error) {
    return res.status(400).json({
      status: 400,
      error: result.error,
    });
  } else {
    return res.status(200).json({
      status: 200,
      data: result,
    });
  }
});

router.post("/prapenuntutan/file", async (req, res) => {
  const penuntutanData = req.body;

  const result = await IndexService.CreatePrapenuntutanFiles(penuntutanData);
  log("result", result);

  if (result.error) {
    return res.status(400).json({
      status: 400,
      error: result.error,
    });
  } else {
    return res.status(200).json({
      status: 200,
      data: result,
    });
  }
});

router.post("/prapenuntutan/jaksa", async (req, res) => {
  const penuntutanData = req.body;

  const result = await IndexService.CreatePrapenuntutanJaksa(penuntutanData);
  log("result", result);

  if (result.error) {
    return res.status(400).json({
      status: 400,
      error: result.error,
    });
  } else {
    return res.status(200).json({
      status: 200,
      data: result,
    });
  }
});

router.post("/lapdumas", [isVerified], async (req, res) => {
  const lapdumasData = req.body;

  const result = await IndexService.GetLapdumas(lapdumasData);
  log("result", result);

  if (result.error) {
    return res.status(400).json({
      status: 400,
      error: result.error,
    });
  } else {
    return res.status(200).json({
      status: 200,
      data: result,
    });
  }
});

router.post("/penyelidikan", [isVerified], async (req, res) => {
  const penyelidikanData = req.body;

  const result = await IndexService.GetPenyelidikan(penyelidikanData);
  log("result", result);

  if (result.error) {
    return res.status(400).json({
      status: 400,
      error: result.error,
    });
  } else {
    return res.status(200).json({
      status: 200,
      data: result,
    });
  }
});

router.post("/penyidikan", [isVerified], async (req, res) => {
  const penyidikanData = req.body;

  const result = await IndexService.GetPenyidikan(penyidikanData);
  log("result", result);

  if (result.error) {
    return res.status(400).json({
      status: 400,
      error: result.error,
    });
  } else {
    return res.status(200).json({
      status: 200,
      data: result,
    });
  }
});

router.post("/prapenuntutan", [isVerified], async (req, res) => {
  const prapenuntutanData = req.body;

  const result = await IndexService.GetPrapenuntutan(prapenuntutanData);
  log("result", result);

  if (result.error) {
    return res.status(400).json({
      status: 400,
      error: result.error,
    });
  } else {
    return res.status(200).json({
      status: 200,
      data: result,
    });
  }
});

router.post("/jaksa_penyelidikan", [isVerified], async (req, res) => {
  const jaksaPenyelidikanData = req.body;

  const result = await IndexService.GetJaksaPenyelidikan(jaksaPenyelidikanData);
  log("result", result);

  if (result.error) {
    return res.status(400).json({
      status: 400,
      error: result.error,
    });
  } else {
    return res.status(200).json({
      status: 200,
      data: result,
    });
  }
});

router.post("/jaksa_penyidikan", [isVerified], async (req, res) => {
  const jaksaPenyidikanData = req.body;

  const result = await IndexService.GetJaksaPenyidikan(jaksaPenyidikanData);
  log("result", result);

  if (result.error) {
    return res.status(400).json({
      status: 400,
      error: result.error,
    });
  } else {
    return res.status(200).json({
      status: 200,
      data: result,
    });
  }
});

router.post("/jaksa_prapenuntutan", [isVerified], async (req, res) => {
  const jaksaPrapenuntutanData = req.body;

  const result = await IndexService.GetJaksaPrapenuntutan(
    jaksaPrapenuntutanData
  );
  log("result", result);

  if (result.error) {
    return res.status(400).json({
      status: 400,
      error: result.error,
    });
  } else {
    return res.status(200).json({
      status: 200,
      data: result,
    });
  }
});

module.exports = router;
