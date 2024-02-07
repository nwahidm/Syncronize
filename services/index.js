const debug = require("debug");
const log = debug("integration-service:services:");

const {
  tbl_lapdumas,
  tbl_lapdumas_files,
  tbl_penyelidikan,
  tbl_penyelidikan_files,
  tbl_penyelidikan_jaksa,
  tbl_penyidikan,
  tbl_penyidikan_files,
  tbl_penyidikan_jaksa,
  tbl_prapenuntutan,
  tbl_prapenuntutan_files,
  tbl_prapenuntutan_jaksa,
  sequelize,
} = require("../models");
// const { Op } = require('sequelize');

require("dotenv").config();

async function CreateLapdumas(lapdumasData) {
  const {
    kode_satker,
    inst_nama,
    nomor_surat,
    tanggal_surat,
    tanggal_terima,
    kasus_posisi,
    asal_surat,
    status,
  } = lapdumasData;
  log("[Integration] Create Lapdumas", lapdumasData);
  try {
    const created = await tbl_lapdumas.create({
      kode_satker,
      inst_nama,
      nomor_surat,
      tanggal_surat,
      tanggal_terima,
      kasus_posisi,
      asal_surat,
      status,
    });

    return {
      message: "Sukses.",
      data: created,
    };
  } catch (error) {
    return error;
  }
}

async function CreateLapdumasFiles(lapdumasData) {
  const { id_lapdumas, filename, originalname, keterangan } = lapdumasData;
  log("[Integration] Create Lapdumas Files", lapdumasData);
  try {
    const checkLapdumas = await tbl_lapdumas.findOne({
      where: { id: id_lapdumas },
      raw: true,
    });
    if (!checkLapdumas) throw { error: "Lapdumas tidak tersedia." };

    const created = await tbl_lapdumas_files.create({
      id_lapdumas,
      filename,
      originalname,
      keterangan,
    });

    return {
      message: "Sukses.",
      data: created,
    };
  } catch (error) {
    return error;
  }
}

async function CreatePenyelidikan(penyelidikanData) {
  const {
    id_lapdumas,
    kode_satker,
    inst_nama,
    nomor_sprintlid,
    tanggal_sprintlid,
    kasus_posisi,
    status,
  } = penyelidikanData;
  log("[Integration] Create Penyelidikan", penyelidikanData);
  try {
    let checkLapdumas;
    if (id_lapdumas) {
      checkLapdumas = await tbl_lapdumas.findOne({
        where: { id: id_lapdumas },
        raw: true,
      });
      if (!checkLapdumas) throw { error: "Lapdumas tidak tersedia." };
    }

    const created = await tbl_penyelidikan.create({
      id_lapdumas: id_lapdumas ? id_lapdumas : null,
      kode_satker,
      inst_nama,
      nomor_sprintlid,
      tanggal_sprintlid,
      kasus_posisi,
      status,
    });

    return {
      message: "Sukses.",
      data: created,
    };
  } catch (error) {
    return error;
  }
}

async function CreatePenyelidikanFiles(penyelidikanData) {
  const { id_penyelidikan, filename, originalname, keterangan } =
    penyelidikanData;
  log("[Integration] Create Penyelidikan Files", penyelidikanData);
  try {
    if (!id_penyelidikan) throw { error: "Penyelidikan harus dilampirkan." };

    const checkPenyelidikan = await tbl_penyelidikan.findOne({
      where: { id: id_penyelidikan },
      raw: true,
    });
    if (!checkPenyelidikan) throw { error: "Penyelidikan tidak tersedia." };

    const created = await tbl_penyelidikan_files.create({
      id_penyelidikan,
      filename,
      originalname,
      keterangan,
    });

    return {
      message: "Sukses.",
      data: created,
    };
  } catch (error) {
    return error;
  }
}

async function CreatePenyelidikanJaksa(penyelidikanData) {
  const { id_penyelidikan, nip, nama, golongan, pangkat, jabatan } =
    penyelidikanData;
  log("[Integration] Create Penyelidikan Jaksa", penyelidikanData);
  try {
    if (!id_penyelidikan) throw { error: "Penyelidikan harus dilampirkan." };

    const checkPenyelidikan = await tbl_penyelidikan.findOne({
      where: { id: id_penyelidikan },
      raw: true,
    });
    if (!checkPenyelidikan) throw { error: "Penyelidikan tidak tersedia." };

    const created = await tbl_penyelidikan_jaksa.create({
      id_penyelidikan,
      nip,
      nama,
      golongan,
      pangkat,
      jabatan,
    });

    return {
      message: "Sukses.",
      data: created,
    };
  } catch (error) {
    return error;
  }
}

async function CreatePenyidikan(penyidikanData) {
  const {
    id_penyelidikan,
    kode_satker,
    inst_nama,
    nomor_sprintdik,
    tanggal_sprintdik,
    nama_perkara,
    nama_tersangka,
    jenis_perkara,
    tppu,
    status,
  } = penyidikanData;
  log("[Integration] Create Penyidikan", penyidikanData);
  try {
    let checkPenyelidikan;
    if (id_penyelidikan) {
      checkPenyelidikan = await tbl_penyelidikan.findOne({
        where: { id: id_penyelidikan },
        raw: true,
      });
      if (!checkPenyelidikan) throw { error: "Penyelidikan tidak tersedia." };
    }

    const created = await tbl_penyidikan.create({
      id_penyelidikan: id_penyelidikan ? id_penyelidikan : null,
      kode_satker,
      inst_nama,
      nomor_sprintdik,
      tanggal_sprintdik,
      nama_perkara,
      nama_tersangka,
      jenis_perkara,
      tppu,
      status,
    });

    return {
      message: "Sukses.",
      data: created,
    };
  } catch (error) {
    return error;
  }
}

async function CreatePenyidikanFiles(penyidikanData) {
  const { id_penyidikan, filename, originalname, keterangan } = penyidikanData;
  log("[Integration] Create Penyidikan Files", penyidikanData);
  try {
    if (!id_penyidikan) throw { error: "Penyidikan harus dilampirkan." };

    const checkPenyidikan = await tbl_penyidikan.findOne({
      where: { id: id_penyidikan },
      raw: true,
    });
    if (!checkPenyidikan) throw { error: "Penyidikan tidak tersedia." };

    const created = await tbl_penyelidikan_files.create({
      id_penyidikan,
      filename,
      originalname,
      keterangan,
    });

    return {
      message: "Sukses.",
      data: created,
    };
  } catch (error) {
    return error;
  }
}

async function CreatePenyidikanJaksa(penyidikanData) {
  const { id_penyidikan, nip, nama, golongan, pangkat, jabatan } =
    penyidikanData;
  log("[Integration] Create Penyidikan Jaksa", penyidikanData);
  try {
    if (!id_penyidikan) throw { error: "Penyidikan harus dilampirkan." };

    const checkPenyidikan = await tbl_penyidikan.findOne({
      where: { id: id_penyidikan },
      raw: true,
    });
    if (!checkPenyidikan) throw { error: "Penyidikan tidak tersedia." };

    const created = await tbl_penyidikan_jaksa.create({
      id_penyidikan,
      nip,
      nama,
      golongan,
      pangkat,
      jabatan,
    });

    return {
      message: "Sukses.",
      data: created,
    };
  } catch (error) {
    return error;
  }
}

async function CreatePrapenuntutan(penuntutanData) {
  const {
    kode_satker,
    inst_nama,
    nomor_berkas,
    tanggal_berkas,
    tanggal_terima,
    nama_perkara,
    nama_tersangka,
    jenis_perkara,
    tppu,
    status,
  } = penuntutanData;
  log("[Integration] Create Prapenuntutan", penuntutanData);
  try {
    const created = await tbl_prapenuntutan.create({
      kode_satker,
      inst_nama,
      nomor_berkas,
      tanggal_berkas,
      tanggal_terima,
      nama_perkara,
      nama_tersangka,
      jenis_perkara,
      tppu,
      status,
    });

    return {
      message: "Sukses.",
      data: created,
    };
  } catch (error) {
    return error;
  }
}

async function CreatePrapenuntutanFiles(penuntutanData) {
  const { id_prapenuntutan, filename, originalname, keterangan } =
    penuntutanData;
  log("[Integration] Create Prapenuntutan Files", penuntutanData);
  try {
    if (!id_prapenuntutan) throw { error: "Pra penuntutan harus dilampirkan." };

    const checkPrapenuntutan = await tbl_prapenuntutan.findOne({
      where: { id: id_prapenuntutan },
      raw: true,
    });
    if (!checkPrapenuntutan) throw { error: "Penyidikan tidak tersedia." };

    const created = await tbl_prapenuntutan_files.create({
      id_prapenuntutan,
      filename,
      originalname,
      keterangan,
    });

    return {
      message: "Sukses.",
      data: created,
    };
  } catch (error) {
    return error;
  }
}

async function CreatePrapenuntutanJaksa(penuntutanData) {
  const { id_prapenuntutan, nip, nama, golongan, pangkat, jabatan } =
    penuntutanData;
  log("[Integration] Create Prapenuntutan Jaksa", penuntutanData);
  try {
    if (!id_prapenuntutan) throw { error: "Pra penuntutan harus dilampirkan." };

    const checkPrapenuntutan = await tbl_prapenuntutan.findOne({
      where: { id: id_prapenuntutan },
      raw: true,
    });
    if (!checkPrapenuntutan) throw { error: "Pra penuntutan tidak tersedia." };

    const created = await tbl_prapenuntutan_jaksa.create({
      id_prapenuntutan,
      nip,
      nama,
      golongan,
      pangkat,
      jabatan,
    });

    return {
      message: "Sukses.",
      data: created,
    };
  } catch (error) {
    return error;
  }
}

async function GetLapdumas(user) {
  log("[Integration] GetLapdumas", user);
  try {
    const data = await tbl_lapdumas.findAll({
      include: {
        model: tbl_lapdumas_files,
        as: "files",
      },
      nest: true,
    });

    return data;
  } catch (error) {
    return error;
  }
}

async function GetPenyelidikan(user) {
  log("[Integration] GetPenyelidikan", user);
  try {
    const data = await tbl_penyelidikan.findAll({
      include: [
        {
          model: tbl_penyelidikan_files,
          as: "files",
        },
        {
          model: tbl_penyelidikan_jaksa,
          as: "penyelidikan_jaksa",
        },
      ],
      nest: true,
    });

    return data;
  } catch (error) {
    return error;
  }
}

async function GetPenyidikan(user) {
  log("[Integration] GetPenyidikan", user);
  try {
    const data = await tbl_penyidikan.findAll({
      include: [
        {
          model: tbl_penyidikan_files,
          as: "files",
        },
        {
          model: tbl_penyidikan_jaksa,
          as: "penyidikan_jaksa",
        },
      ],
      nest: true,
    });

    return data;
  } catch (error) {
    return error;
  }
}

async function GetPrapenuntutan(user) {
  log("[Integration] GetPrapenuntutan", user);
  try {
    const data = await tbl_prapenuntutan.findAll({
      include: [
        {
          model: tbl_prapenuntutan_files,
          as: "files",
        },
        {
          model: tbl_prapenuntutan_jaksa,
          as: "prapenuntutan_jaksa",
        },
      ],
      nest: true,
    });

    return data;
  } catch (error) {
    return error;
  }
}

async function GetPenyidikan(user) {
  log("[Integration] GetPenyidikan", user);
  try {
    const data = await tbl_penyidikan.findAll({
      include: [
        {
          model: tbl_penyidikan_files,
          as: "files",
        },
        {
          model: tbl_penyidikan_jaksa,
          as: "penyidikan_jaksa",
        },
      ],
      nest: true,
    });

    return data;
  } catch (error) {
    return error;
  }
}

async function GetJaksaPenyelidikan() {
  log("[Integration] GetJaksaPenyelidikan");
  try {
    const data = await tbl_penyelidikan_jaksa.findAll({ raw: true });

    return data;
  } catch (error) {
    return error;
  }
}

async function GetJaksaPenyidikan() {
  log("[Integration] GetJaksaPenyidikan");
  try {
    const data = await tbl_penyidikan_jaksa.findAll({ raw: true });

    return data;
  } catch (error) {
    return error;
  }
}

async function GetJaksaPrapenuntutan() {
  log("[Integration] GetJaksaPrapenuntutan");
  try {
    const data = await tbl_prapenuntutan_jaksa.findAll({ raw: true });

    return data;
  } catch (error) {
    return error;
  }
}

module.exports = {
  CreateLapdumas,
  CreateLapdumasFiles,
  CreatePenyelidikan,
  CreatePenyelidikanFiles,
  CreatePenyelidikanJaksa,
  CreatePenyidikan,
  CreatePenyidikanFiles,
  CreatePenyidikanJaksa,
  CreatePrapenuntutan,
  CreatePrapenuntutanFiles,
  CreatePrapenuntutanJaksa,
  GetLapdumas,
  GetPenyelidikan,
  GetPenyidikan,
  GetPrapenuntutan,
  GetJaksaPenyelidikan,
  GetJaksaPenyidikan,
  GetJaksaPrapenuntutan,
};
